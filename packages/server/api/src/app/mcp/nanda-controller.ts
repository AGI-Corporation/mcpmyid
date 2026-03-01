
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
}
