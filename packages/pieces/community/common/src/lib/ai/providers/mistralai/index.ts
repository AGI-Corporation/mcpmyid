import { AI, AIChatRole, AIFactory } from '../..';
import OpenAI from 'openai';
import { model } from '../utils';

export const mistralai: AIFactory = ({ proxyUrl, engineToken }): AI => {
	const sdk = new OpenAI({
		apiKey: engineToken,
		baseURL: proxyUrl,
	});
	return {
		provider: 'MISTRALAI' as const,
		function: {
			call: async (params) => {
				const completion = await sdk.chat.completions.create({
					model: params.model,
					messages: params.messages.map((message) => ({
						role: message.role === 'user' ? 'user' : 'assistant',
						content: message.content,
					})) as any,
					max_tokens: params.maxTokens,
					tools: params.functions.map((f) => ({
						type: 'function',
						function: {
							name: f.name,
							description: f.description,
							parameters: f.arguments as any,
						},
					})),
				});

				const toolCall = completion.choices[0].message.tool_calls?.[0];

				return {
					choices: completion.choices.map((choice) => ({
						role: AIChatRole.ASSISTANT,
						content: choice.message.content ?? '',
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
					model: completion.model,
					created: completion.created,
					usage: completion.usage && {
						completionTokens: completion.usage.completion_tokens,
						promptTokens: completion.usage.prompt_tokens,
						totalTokens: completion.usage.total_tokens,
					},
				};
			},
		},
		chat: {
			text: async (params) => {
				const completion = await sdk.chat.completions.create({
					model: params.model,
					messages: params.messages.map((message) => ({
						role: message.role === 'user' ? 'user' : 'assistant',
						content: message.content,
					})) as any,
					temperature: Math.tanh(params.creativity ?? 100),
					max_tokens: params.maxTokens,
					stop: params.stop,
				});

				return {
					choices: completion.choices.map((choice) => ({
						role: AIChatRole.ASSISTANT,
						content: choice.message.content ?? '',
					})),
					created: completion.created,
					model: completion.model,
					usage: completion.usage && {
						completionTokens: completion.usage.completion_tokens,
						promptTokens: completion.usage.prompt_tokens,
						totalTokens: completion.usage.total_tokens,
					},
				};
			},
		},
	};
};

export const mistralaiModels = [
	model({ label: 'Mistral Large', value: 'mistral-large-latest', supported: ['text', 'function'] }),
	model({ label: 'Mistral Small', value: 'mistral-small-latest', supported: ['text', 'function'] }),
	model({ label: 'Codestral', value: 'codestral-latest', supported: ['text', 'function'] }),
	model({ label: 'Pixtral Large', value: 'pixtral-large-latest', supported: ['text', 'function'] }),
    model({ label: 'Mistral NeMo', value: 'open-mistral-nemo', supported: ['text'] }),
];
