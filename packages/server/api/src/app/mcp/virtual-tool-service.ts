
import { FastifyBaseLogger } from 'fastify'
import { ActionBase, PiecePropertyMap, Property, PropertyType } from '@activepieces/pieces-framework'
import { isNil } from '@activepieces/shared'

export type BlendedTool = {
    id: string
    name: string
    description: string
    baseActions: { pieceName: string, actionName: string }[]
    ruleSets: any[] // Guido-inspired rules
}

export const virtualToolService = (logger: FastifyBaseLogger) => ({
    async blendActions(name: string, description: string, actions: (ActionBase & { pieceName: string })[]): Promise<ActionBase> {
        // Aggregate properties from all actions
        const blendedProps: PiecePropertyMap = {}

        for (const action of actions) {
            const shortPieceName = action.pieceName.replace('@activepieces/piece-', '')
            for (const [propName, prop] of Object.entries(action.props)) {
                // Handle naming collisions by prefixing with piece and action name
                const uniqueName = `${shortPieceName}_${action.name}_${propName}`
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
        if (!ruleSets) return;

        for (const rule of ruleSets) {
            const { conditions, targets } = rule
            const conditionMet = conditions.every((c: any) => {
                let val = this.getNestedValue(data, c.name)

                let isConditionTrue = false
                if (c.state === 'set') isConditionTrue = !isNil(val)
                else if (c.state === 'set_to_value') isConditionTrue = val === c.value
                else if (c.state === 'contains') {
                    if (Array.isArray(val)) isConditionTrue = val.includes(c.value)
                    else if (typeof val === 'string') isConditionTrue = val.includes(c.value)
                }

                return c.not ? !isConditionTrue : isConditionTrue
            })

            if (conditionMet) {
                // Enforce targets
                for (const target of targets) {
                    const val = this.getNestedValue(data, target.name)
                    let isTargetMet = false

                    if (target.state === 'set') isTargetMet = !isNil(val)
                    else if (target.state === 'set_to_value') isTargetMet = val === target.value
                    else if (target.state === 'contains') {
                        if (Array.isArray(val)) isTargetMet = val.includes(target.value)
                        else if (typeof val === 'string') isTargetMet = val.includes(target.value)
                    }

                    if (target.not ? isTargetMet : !isTargetMet) {
                        throw new Error(`Rule Violation: ${rule.description}. ${target.name} state must be ${target.not ? 'NOT ' : ''}${target.state}${target.value ? ': ' + target.value : ''}.`)
                    }
                }
            }
        }
    },

    getNestedValue(obj: any, path: string) {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj)
    }
})
