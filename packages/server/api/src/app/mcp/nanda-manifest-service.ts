
import { FastifyBaseLogger } from 'fastify'
import { mcpService } from './mcp-service'
import { pieceMetadataService } from '../pieces/piece-metadata-service'
import { projectService } from '../project/project-service'
import { McpPieceStatus } from '@activepieces/shared'

export const nandaManifestService = (logger: FastifyBaseLogger) => ({
    async generateManifest(mcpId: string) {
        const mcp = await mcpService(logger).getOrThrow({ mcpId })
        const projectId = mcp.projectId
        const platformId = await projectService.getPlatformId(projectId)

        const enabledPieces = mcp.pieces.filter((piece) => piece.status === McpPieceStatus.ENABLED)

        const capabilities = await Promise.all(enabledPieces.map(async (p) => {
            const metadata = await pieceMetadataService(logger).getOrThrow({
                name: p.pieceName,
                version: undefined,
                projectId,
                platformId,
            })

            return {
                id: metadata.name,
                type: 'TOOL_PROVIDER',
                name: metadata.displayName,
                description: metadata.description,
                version: metadata.version,
                tools: Object.values(metadata.actions).map(action => ({
                    name: action.name,
                    description: (action as any).aiDescription || action.description,
                    parameters: action.props,
                })),
                protocol: 'MCP/NANDA-1.0',
            }
        }))

        return {
            nanda_version: '1.0.0',
            agent_id: `activepieces_project_${projectId}`,
            capabilities,
            discovery_url: `{{SYSTEM_URL}}/api/v1/nanda/discover?token=${mcp.token}`,
        }
    }
})
