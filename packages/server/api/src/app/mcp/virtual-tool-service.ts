
import { FastifyBaseLogger } from 'fastify'
import { ActionBase, PiecePropertyMap, Property, PropertyType } from '@activepieces/pieces-framework'
import { apId, isNil } from '@activepieces/shared'
import { repoFactory } from '../core/db/repo-factory'
import { VirtualToolEntity } from './virtual-tool-entity'
import dayjs from 'dayjs'

const repo = repoFactory(VirtualToolEntity)

export const virtualToolService = (logger: FastifyBaseLogger) => ({
    async create(data: any) {
        return repo().save({
            id: apId(),
            created: dayjs().toISOString(),
            updated: dayjs().toISOString(),
            ...data
        })
    },

    async listByMcpId(mcpId: string) {
        return repo().find({ where: { mcpId } })
    },

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
    },

    async createToolsFromOpenApi(openApiSpec: any): Promise<ActionBase[]> {
        const tools: ActionBase[] = []
        const paths = openApiSpec.paths || {}
        const serverUrl = openApiSpec.servers?.[0]?.url || ''

        for (const [path, methods] of Object.entries(paths)) {
            for (const [method, operation] of Object.entries(methods as any)) {
                const op = operation as any
                const name = op.operationId || `${method}_${path.replace(/\//g, '_')}`

                const props: PiecePropertyMap = {}

                // Map parameters
                if (op.parameters) {
                    for (const param of op.parameters) {
                        props[param.name] = Property.ShortText({
                            displayName: param.name,
                            description: param.description || '',
                            required: param.required || false,
                        })
                    }
                }

                // Map request body (simplified)
                if (op.requestBody?.content?.['application/json']?.schema) {
                    props['body'] = Property.Json({
                        displayName: 'Request Body',
                        description: 'JSON request body',
                        required: true,
                    })
                }

                tools.push({
                    name,
                    displayName: op.summary || name,
                    description: op.description || op.summary || `Execute ${method.toUpperCase()} ${path}`,
                    props,
                    // Use a hidden property to store metadata for execution
                    requireAuth: !!op.security,
                    run: async (context) => {
                        // Proto-execution logic for OpenAPI-imported tools
                        const queryParams = { ...context.propsValue }
                        delete queryParams['body']

                        return {
                            message: `Executing ${method.toUpperCase()} ${serverUrl}${path}`,
                            request: {
                                url: `${serverUrl}${path}`,
                                method: method.toUpperCase(),
                                queryParams,
                                body: context.propsValue['body']
                            }
                        }
                    }
                } as unknown as ActionBase)
            }
        }
        return tools
    }
})
