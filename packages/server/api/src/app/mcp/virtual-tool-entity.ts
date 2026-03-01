import { ApId, McpPieceStatus } from '@activepieces/shared'
import { EntitySchema } from 'typeorm'
import { ApIdSchema, BaseColumnSchemaPart } from '../database/database-common'

export type VirtualTool = {
    id: string
    created: string
    updated: string
    mcpId: ApId
    name: string
    description: string
    baseActions: { pieceName: string, actionName: string }[]
    ruleSets: any[]
    status: McpPieceStatus
    metadata?: any
}

export const VirtualToolEntity = new EntitySchema<VirtualTool>({
    name: 'virtual_tool',
    columns: {
        ...BaseColumnSchemaPart,
        mcpId: {
            ...ApIdSchema,
            nullable: false,
        },
        name: {
            type: String,
            nullable: false,
        },
        description: {
            type: String,
            nullable: false,
        },
        baseActions: {
            type: 'jsonb',
            nullable: false,
        },
        ruleSets: {
            type: 'jsonb',
            nullable: false,
            default: [],
        },
        metadata: {
            type: 'jsonb',
            nullable: true,
        },
        status: {
            type: String,
            enum: Object.values(McpPieceStatus),
            default: McpPieceStatus.ENABLED,
            nullable: false,
        },
    },
    indices: [
        {
            name: 'virtual_tool_mcp_id',
            columns: ['mcpId'],
        },
    ],
})
