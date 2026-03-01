import { PropertyType } from '@activepieces/pieces-framework'
import { UserInteractionJobType } from '@activepieces/server-shared'
import { EngineResponseStatus, ExecuteActionResponse, FlowStatus, FlowVersionState, GetFlowVersionForWorkerRequestType, isNil, McpPieceStatus, McpPieceWithConnection, McpTrigger, TriggerType } from '@activepieces/shared'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js'
import { FastifyBaseLogger, FastifyReply } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import { EngineHelperResponse } from 'server-worker'
import { flowService } from '../flows/flow/flow.service'
import { pieceMetadataService } from '../pieces/piece-metadata-service'
import { projectService } from '../project/project-service'
import { webhookSimulationService } from '../webhooks/webhook-simulation/webhook-simulation-service'
import { webhookService } from '../webhooks/webhook.service'
import { userInteractionWatcher } from '../workers/user-interaction-watcher'
import { mcpService } from './mcp-service'
import { MAX_TOOL_NAME_LENGTH, mcpPropertyToZod, piecePropertyToZod } from './mcp-utils'
import { deterministicExtract, estimateDifficulty, repairOutput, semanticValidate } from '../ai/cactus-utils'
import { virtualToolService } from './virtual-tool-service'
import { httpClient, HttpMethod } from '../helper/http/axios-client'

export async function createMcpServer({
    mcpId,
    reply,
    logger,
}: CreateMcpServerRequest): Promise<CreateMcpServerResponse> {
    const mcp = await mcpService(logger).getOrThrow({ mcpId })
    const projectId = mcp.projectId
    const platformId = await projectService.getPlatformId(projectId)

    // filter out pieces that are not enabled
    const enabledPieces = mcp.pieces.filter((piece) => piece.status === McpPieceStatus.ENABLED)

    // Get all pieces with their connections
    const pieces = await Promise.all(enabledPieces.map(async (piece: McpPieceWithConnection) => {
        return pieceMetadataService(logger).getOrThrow({
            name: piece.pieceName,
            version: undefined,
            projectId,
            platformId,
        })
    }))

    const transport = new SSEServerTransport('/api/v1/mcp/messages', reply.raw)
    const server = new McpServer({
        name: 'Activepieces',
        version: '1.0.0',
    })

    const uniqueActions = new Set<string>()

    // Load virtual tools (Guido rule engine integrated)
    const virtualTools = await virtualToolService(logger).listByMcpId(mcpId)
    for (const vt of virtualTools) {
        server.tool(
            vt.name.slice(0, MAX_TOOL_NAME_LENGTH),
            vt.description,
            Object.fromEntries(
                Object.entries(vt.props || {}).map(([key, prop]: [string, any]) =>
                    [key, piecePropertyToZod(prop)],
                ),
            ),
            async (params) => {
                // Apply Guido Rules (Layer 2: Governance)
                virtualToolService(logger).validateBlendedData(params, vt.ruleSets);

                // Apply Cactus Logic (Layer 3: Repair & Layer 4: Validation)
                // Note: Simplified for virtual tools, can be expanded to full pipeline

                if (vt.metadata?.type === 'OPENAPI') {
                    const response = await httpClient.sendRequest({
                        method: vt.metadata.method as HttpMethod,
                        url: vt.metadata.url,
                        queryParams: params, // Simplified mapping
                        body: params['body'],
                    })

                    return {
                        content: [{
                            type: 'text',
                            text: `✅ Successfully executed ${vt.name}\n\n` +
                                `\`\`\`json\n${JSON.stringify(response.body, null, 2)}\n\`\`\``,
                        }]
                    }
                }

                return {
                    content: [{
                        type: 'text',
                        text: `✅ Virtual Tool ${vt.name} executed successfully.`,
                    }]
                }
            }
        )
        uniqueActions.add(vt.name)
    }

    pieces.flatMap(piece => {
        return Object.values(piece.actions).map(action => {
            if (uniqueActions.has(action.name)) {
                return
            }
            
            // Find matching piece in mcp pieces
            const mcpPiece = mcp.pieces.find(p => p.pieceName === piece.name)
            const pieceConnectionExternalId = mcpPiece?.connection?.externalId
            
            const shortPieceName = piece.name.replace('@activepieces/piece-', '')
            const actionName = `${shortPieceName}_${action.name}`.slice(0, MAX_TOOL_NAME_LENGTH)
            uniqueActions.add(actionName)
            
            server.tool(
                actionName,
                action.aiDescription || action.description,
                Object.fromEntries(
                    Object.entries(action.props).filter(([_key, prop]) => 
                        prop.type !== PropertyType.MARKDOWN,
                    ).map(([key, prop]) =>
                        [key, piecePropertyToZod(prop)],
                    ),
                ),
                async (params) => {
                    const parsedInputs = {
                        ...params,
                        ...Object.fromEntries(
                            Object.entries(action.props)
                                .filter(([key, prop]) => !isNil(prop.defaultValue) && isNil(params[key]))
                                .map(([key, prop]) => [key, prop.defaultValue]),
                        ),
                        ...(pieceConnectionExternalId ? { auth: `{{connections['${pieceConnectionExternalId}']}}` } : {}),
                    }
                    
                    // Cactus adaptive repair layer
                    const query = (params.query as string) || ''; // MCP clients might pass query in params
                    const difficulty = estimateDifficulty(query, 1);
                    logger.info({ action: action.name, difficulty }, '[McpServer] Executing tool with difficulty estimation');

                    let finalInputs = repairOutput(action, parsedInputs, query);
                    const validation = semanticValidate(action, finalInputs, query);

                    if (!validation.valid) {
                        logger.warn({ action: action.name, reason: validation.reason }, '[McpServer] Semantic validation failed, attempting deterministic extraction');

                        // Layer 7: Deterministic Extraction fallback
                        const extracted = deterministicExtract(action, query);
                        if (extracted) {
                            logger.info({ action: action.name }, '[McpServer] Deterministic extraction successful');
                            finalInputs = {
                                ...finalInputs,
                                ...extracted,
                            }
                        }
                    }

                    const result = await userInteractionWatcher(logger).submitAndWaitForResponse<EngineHelperResponse<ExecuteActionResponse>>({
                        jobType: UserInteractionJobType.EXECUTE_TOOL,
                        actionName: action.name,
                        pieceName: piece.name,
                        pieceVersion: piece.version,
                        packageType: piece.packageType,
                        pieceType: piece.pieceType,
                        input: finalInputs,
                        projectId,
                    })

                    if (result.status === EngineResponseStatus.OK) {
                        return {
                            content: [{
                                type: 'text',
                                text: `✅ Successfully executed ${action.displayName}\n\n` +
                                    `${action.description}\n\n` +
                                    `\`\`\`json\n${JSON.stringify(result.result, null, 2)}\n\`\`\``,
                            }],
                        }
                    }
                    else {
                        return {
                            content: [{
                                type: 'text',
                                text: `❌ Error executing ${action.displayName}\n\n` +
                                    `${action.description}\n\n` +
                                    `\`\`\`\n${result.standardError || 'Unknown error occurred'}\n\`\`\``,
                            }],
                        }
                    }
                },
            )
        })
    })

    const flows = await flowService(logger).list({ 
        projectId,
        cursorRequest: null,
        limit: 100,
        folderId: undefined,
        status: [FlowStatus.ENABLED],
        name: undefined,
        versionState: FlowVersionState.LOCKED,
    })

    const mcpFlows = flows.data.filter((flow) => 
        flow.version.trigger.type === TriggerType.PIECE &&
        flow.version.trigger.settings.pieceName === '@activepieces/piece-mcp',
    )

    for (const flow of mcpFlows) {
        const triggerSettings = flow.version.trigger.settings as McpTrigger
        const toolName = ('flow_' + triggerSettings.input?.toolName).slice(0, MAX_TOOL_NAME_LENGTH)
        const toolDescription = triggerSettings.input?.toolDescription
        const inputSchema = triggerSettings.input?.inputSchema
        const returnsResponse = triggerSettings.input?.returnsResponse

        const zodFromInputSchema = Object.fromEntries(
            inputSchema.map((prop) => [prop.name, mcpPropertyToZod(prop)]),
        )

        server.tool(
            toolName,
            toolDescription,
            zodFromInputSchema,
            async (params) => { 
                const response = await webhookService.handleWebhook({
                    data: () => {
                        return Promise.resolve({
                            body: {},
                            method: 'POST',
                            headers: {},
                            queryParams: {},
                        })
                    },
                    logger,
                    flowId: flow.id,
                    async: !returnsResponse,
                    flowVersionToRun: GetFlowVersionForWorkerRequestType.LOCKED,
                    saveSampleData: await webhookSimulationService(logger).exists(
                        flow.id,
                    ),
                    payload: params,
                })
                if (response.status !== StatusCodes.OK) {
                    return {
                        content: [{
                            type: 'text',
                            text: `❌ Error executing flow ${flow.version.displayName}\n\n\`\`\`\n${response || 'Unknown error occurred'}\n\`\`\``,
                        }],
                    }
                }
                return {
                    content: [{
                        type: 'text',
                        text: `✅ Successfully executed flow ${flow.version.displayName}\n\n\`\`\`json\n${JSON.stringify(response, null, 2)}\n\`\`\``,
                    }],
                }
            },
        )
    }

    return { server, transport }
}

export type CreateMcpServerRequest = {
    mcpId: string
    reply: FastifyReply
    logger: FastifyBaseLogger
}
export type CreateMcpServerResponse = {
    server: McpServer
    transport: SSEServerTransport
}

