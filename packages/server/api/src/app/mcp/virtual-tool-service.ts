
import { FastifyBaseLogger } from 'fastify'
import { ActionBase, PiecePropertyMap } from '@activepieces/pieces-framework'
import { isNil } from '@activepieces/shared'

export type BlendedTool = {
    id: string
    name: string
    description: string
    baseActions: { pieceName: string, actionName: string }[]
    ruleSets: any[] // Guido-inspired rules
}

export const virtualToolService = (logger: FastifyBaseLogger) => ({
    async blendActions(name: string, description: string, actions: ActionBase[]): Promise<ActionBase> {
        // Aggregate properties from all actions
        const blendedProps: PiecePropertyMap = {}

        for (const action of actions) {
            for (const [propName, prop] of Object.entries(action.props)) {
                // Handle naming collisions by prefixing with piece name
                const uniqueName = `${action.name}_${propName}`
                blendedProps[uniqueName] = {
                    ...prop,
                    displayName: `${action.displayName}: ${prop.displayName}`
                }
            }
        }

        return {
            name,
            displayName: name,
            description: `${description} (Blended from ${actions.length} tools)`,
            props: blendedProps,
            requireAuth: actions.some(a => a.requireAuth),
        } as ActionBase
    },

    // Apply Guido-inspired rules to blended data
    validateBlendedData(data: Record<string, any>, ruleSets: any[]) {
        for (const rule of ruleSets) {
            const { conditions, targets } = rule
            const conditionMet = conditions.every((c: any) => {
                const val = data[c.name]
                if (c.state === 'set') return !isNil(val)
                if (c.state === 'set_to_value') return val === c.value
                return false
            })

            if (conditionMet) {
                // Enforce targets
                for (const target of targets) {
                    if (target.state === 'set' && isNil(data[target.name])) {
                        throw new Error(`Rule Violation: ${rule.description}. ${target.name} must be set.`)
                    }
                }
            }
        }
    }
})
