import { AIChatRole, AIFactory, AI } from '../..';
import { httpClient, HttpMethod, AuthenticationType } from '../../../http';
import { model } from '../utils';

export const mistral: AIFactory = ({ proxyUrl, engineToken }): AI => {
    return {
        provider: 'mistral',
        chat: {
            text: async (params) => {
                const response = await httpClient.sendRequest<any>({
                    method: HttpMethod.POST,
                    url: `${proxyUrl}/chat/completions`,
                    authentication: {
                        type: AuthenticationType.BEARER_TOKEN,
                        token: engineToken,
                    },
                    body: {
                        model: params.model,
                        messages: params.messages,
                        temperature: params.creativity,
                        max_tokens: params.maxTokens,
                        stop: params.stop,
                        response_format: { type: 'text' }
                    },
                });

                return {
                    choices: response.body.choices.map((choice: any) => ({
                        role: AIChatRole.ASSISTANT,
                        content: choice.message.content,
                    })),
                    usage: response.body.usage && {
                        promptTokens: response.body.usage.prompt_tokens,
                        completionTokens: response.body.usage.completion_tokens,
                        totalTokens: response.body.usage.total_tokens,
                    },
                };
            },
        },
        function: {
            call: async (params) => {
                const response = await httpClient.sendRequest<any>({
                    method: HttpMethod.POST,
                    url: `${proxyUrl}/chat/completions`,
                    authentication: {
                        type: AuthenticationType.BEARER_TOKEN,
                        token: engineToken,
                    },
                    body: {
                        model: params.model,
                        messages: params.messages,
                        tools: params.functions.map((f) => ({
                            type: 'function',
                            function: {
                                name: f.name,
                                description: f.description,
                                parameters: f.arguments,
                            },
                        })),
                        tool_choice: 'auto',
                    },
                });

                const toolCall = response.body.choices[0].message.tool_calls?.[0];

                return {
                    choices: response.body.choices.map((choice: any) => ({
                        role: AIChatRole.ASSISTANT,
                        content: choice.message.content || '',
                    })),
                    call: toolCall
                        ? {
                              id: toolCall.id,
                              function: {
                                  name: toolCall.function.name,
                                  arguments: JSON.parse(toolCall.function.arguments),
                              },
                          }
                        : null,
                    usage: response.body.usage && {
                        promptTokens: response.body.usage.prompt_tokens,
                        completionTokens: response.body.usage.completion_tokens,
                        totalTokens: response.body.usage.total_tokens,
                    },
                };
            },
        },
    };
};

export const mistralModels = [
    model({ label: 'Mistral 7B', value: 'open-mistral-7b', supported: ['text'] }),
    model({ label: 'Mistral Large', value: 'mistral-large-latest', supported: ['text', 'function'] }),
    model({ label: 'Mistral Small', value: 'mistral-small-latest', supported: ['text', 'function'] }),
    model({ label: 'Codestral', value: 'codestral-latest', supported: ['text'] }),
    model({ label: 'Pixtral Large', value: 'pixtral-large-latest', supported: ['text', 'function'] }),
];
