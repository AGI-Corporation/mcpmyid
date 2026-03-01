
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { Type } from '@sinclair/typebox'
import { mcpService } from './mcp-service'
import { nandaManifestService } from './nanda-manifest-service'

export const nandaController: FastifyPluginAsyncTypebox = async (fastify) => {
    fastify.get(
        '/discover',
        {
            schema: {
                querystring: Type.Object({
                    token: Type.String(),
                }),
            },
        },
        async (request) => {
            const mcp = await mcpService(request.log).getByToken({ token: request.query.token })
            return nandaManifestService(request.log).generateManifest(mcp.id)
        },
    )

    fastify.post(
        '/announce',
        {
            schema: {
                body: Type.Object({
                    index_url: Type.String(),
                    token: Type.String(),
                }),
            },
        },
        async (request) => {
            const mcp = await mcpService(request.log).getByToken({ token: request.body.token })
            const manifest = await nandaManifestService(request.log).generateManifest(mcp.id)

            // In a real implementation, this would call the NANDA Index API
            // request.log.info({ index_url: request.body.index_url, agent_id: manifest.agent_id }, 'Announcing to NANDA Index')

            return {
                status: 'ANNOUNCED',
                agent_id: manifest.agent_id,
                nanda_index: request.body.index_url,
            }
        },
    )
}
