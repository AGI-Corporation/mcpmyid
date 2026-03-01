import {
  createAction,
  Property,
} from '@activepieces/pieces-framework';
import { AIChatRole, AuthenticationType, HttpMethod, httpClient } from '@activepieces/pieces-common';

export const evaluateRag = createAction({
  name: 'evaluate_rag',
  displayName: 'Mistral RAG Evaluation',
  description: 'Evaluate RAG outputs using Mistral "LLM as a Judge" with structured outputs.',
  props: {
    query: Property.LongText({
      displayName: 'Original Query',
      required: true,
    }),
    retrieved_context: Property.LongText({
      displayName: 'Retrieved Context',
      required: true,
    }),
    generated_answer: Property.LongText({
      displayName: 'Generated Answer',
      required: true,
    }),
    model: Property.ShortText({
        displayName: 'Mistral Model',
        required: true,
        defaultValue: 'mistral-large-latest'
    })
  },
  async run(context) {
    const { query, retrieved_context, generated_answer, model } = context.propsValue;

    // We utilize the existing AI common framework to call Mistral
    const ai = AI({
        provider: 'mistral',
        server: {
            apiUrl: context.server.apiUrl,
            token: context.server.token
        }
    });

    const systemPrompt = `You are a judge for evaluating a Retrieval-Augmented Generation (RAG) system.
Evaluate the context relevance, answer relevance, and groundedness based on the following criteria:
Provide a reasoning and a score as a string between '0' and '3' for each criterion.
0: No relevance/Not grounded/Irrelevant
1: Low relevance
2: Medium relevance
3: High relevance/Fully relevant

Context Relevance: How relevant is the retrieved context to the query?
Answer Relevance: How relevant is the generated answer to the query?
Groundedness: How faithful is the generated answer to the retrieved context?`;

    const userContent = `Query: ${query}\nRetrieved Context: ${retrieved_context}\nGenerated Answer: ${generated_answer}`;

    // Use the native Mistral provider with forced JSON structure for precise evaluation
    const response = await httpClient.sendRequest<any>({
        method: HttpMethod.POST,
        url: `${context.server.apiUrl}v1/ai-providers/proxy/mistral/chat/completions`,
        authentication: {
            type: AuthenticationType.BEARER_TOKEN,
            token: context.server.token,
        },
        body: {
            model: model,
            messages: [
                { role: AIChatRole.SYSTEM, content: systemPrompt },
                { role: AIChatRole.USER, content: userContent }
            ],
            temperature: 0,
            response_format: { type: 'json_object' }
        },
    });

    const content = response.body.choices[0].message.content;

    try {
        const parsed = JSON.parse(content);
        return {
            ...parsed,
            status: "EVALUATED",
            judge: "Mistral AI"
        };
    } catch (e) {
        return {
            raw_evaluation: content,
            status: "EVALUATED_RAW",
            judge: "Mistral AI"
        };
    }
  },
});
