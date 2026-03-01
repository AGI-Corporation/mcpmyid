import { ALL_PRINCIPAL_TYPES, ApId, apId, ListMcpsRequest, McpWithPieces, PrincipalType, ProjectId, SeekPage, SERVICE_KEY_SECURITY_OPENAPI } from '@activepieces/shared'
import { FastifyPluginAsyncTypebox, Type } from '@fastify/type-provider-typebox'
import { StatusCodes } from 'http-status-codes'
import { entitiesMustBeOwnedByCurrentProject } from '../authentication/authorization'
import { mcpService } from './mcp-service'
import { virtualToolService } from './virtual-tool-service'
import { httpClient, HttpMethod } from '../helper/http/axios-client'

export const mcpServerController: FastifyPluginAsyncTypebox = async (app) => {

    app.addHook('preHandler', entitiesMustBeOwnedByCurrentProject)
    app.addHook('preSerialization', entitiesMustBeOwnedByCurrentProject)
    
    app.get('/', GetMcpsRequest, async (req) => {
        let projectId: ProjectId
        
        if (req.principal.type === PrincipalType.SERVICE) {
            if (!req.query.projectId) {
                return {
                    data: [],
                    cursor: null,
                }
            }
            projectId = req.query.projectId
        }
        else {
            projectId = req.principal.projectId
        }
        
        const result = await mcpService(req.log).list({
            projectId,
            cursorRequest: req.query.cursor ?? null,
            limit: req.query.limit ?? 10,
        })
        
        return result
    })

    app.post('/:id', UpdateMcpRequest, async (req) => {
        const mcpId = req.params.id
        const { token } = req.body

        return mcpService(req.log).update({
            mcpId,
            token,
        })
    })

    app.post('/:id/rotate', RotateTokenRequest, async (req) => {
        const mcpId = req.params.id
        return mcpService(req.log).update({
            mcpId,
            token: apId(),
        })
    })

    app.post('/:id/blended-tools', CreateBlendedToolRequest, async (req) => {
        const mcpId = req.params.id
        const { name, description, baseActions, ruleSets } = req.body

        return virtualToolService(req.log).create({
            mcpId,
            name,
            description,
            baseActions,
            ruleSets: ruleSets ?? [],
        })
    })

    app.post('/:id/openapi-import', ImportOpenApiRequest, async (req) => {
        await mcpService(req.log).getOrThrow({ mcpId: req.params.id })
        const mcpId = req.params.id
        const { url } = req.body
        const response = await httpClient.sendRequest({
            method: HttpMethod.GET,
            url,
        })

        const tools = await virtualToolService(req.log).createToolsFromOpenApi(response.body)

        const savedTools = await Promise.all(tools.map(t =>
            virtualToolService(req.log).create({
                mcpId,
                name: t.name,
                description: t.description,
                baseActions: [], // Imported tools carry their own logic in 'run'
                ruleSets: [],
            })
        ))

        return {
            status: 'IMPORT_COMPLETED',
            toolsCount: savedTools.length,
            tools: savedTools.map(t => ({
                id: t.id,
                name: t.name,
            }))
        }
    })
}

const GetMcpsRequest = {
    config: {
        allowedPrincipals: ALL_PRINCIPAL_TYPES,
    },
    schema: {
        tags: ['mcp'],
        description: 'List MCP servers',
        security: [SERVICE_KEY_SECURITY_OPENAPI],
        querystring: ListMcpsRequest,
        response: {
            [StatusCodes.OK]: SeekPage(McpWithPieces),
        },
    },
}

const ImportOpenApiRequest = {
    config: {
        allowedPrincipals: ALL_PRINCIPAL_TYPES,
    },
    schema: {
        tags: ['mcp'],
        description: 'Import tools from an OpenAPI specification',
        security: [SERVICE_KEY_SECURITY_OPENAPI],
        params: Type.Object({
            id: ApId,
        }),
        body: Type.Object({
            url: Type.String(),
        }),
        response: {
            [StatusCodes.OK]: Type.Any(),
        },
    },
}

const CreateBlendedToolRequest = {
    config: {
        allowedPrincipals: ALL_PRINCIPAL_TYPES,
    },
    schema: {
        tags: ['mcp'],
        description: 'Create a blended virtual tool',
        security: [SERVICE_KEY_SECURITY_OPENAPI],
        params: Type.Object({
            id: ApId,
        }),
        body: Type.Object({
            name: Type.String(),
            description: Type.String(),
            baseActions: Type.Array(Type.Object({
                pieceName: Type.String(),
                actionName: Type.String(),
            })),
            ruleSets: Type.Optional(Type.Array(Type.Any())),
        }),
        response: {
            [StatusCodes.CREATED]: Type.Any(),
        },
    },
}

export const UpdateMcpRequest = {
    config: {
        allowedPrincipals: ALL_PRINCIPAL_TYPES,
    },
    schema: {
        tags: ['mcp'],
        description: 'Update the project MCP server configuration',
        security: [SERVICE_KEY_SECURITY_OPENAPI],
        params: Type.Object({
            id: ApId,
        }),
        body: Type.Object({
            token: Type.Optional(Type.String()),
        }),
        response: {
            [StatusCodes.OK]: McpWithPieces,
        },
    },
}

const RotateTokenRequest = {
    config: {
        allowedPrincipals: ALL_PRINCIPAL_TYPES,
    },
    schema: {
        tags: ['mcp'],
        description: 'Rotate the MCP token',
        security: [SERVICE_KEY_SECURITY_OPENAPI],
        params: Type.Object({
            id: ApId,
        }),
        response: {
            [StatusCodes.OK]: McpWithPieces,
        },
    },
}
