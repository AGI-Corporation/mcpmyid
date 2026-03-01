import {
  createAction,
  Property,
} from '@activepieces/pieces-framework';
import { AI, AIChatRole } from '@activepieces/pieces-common';

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

    // Note: In a real production scenario, we would use .parse() if the SDK supported it natively
    // or provide a JSON schema in the prompt to ensure structured output.
    const response = await ai.chat.text({
        model: model,
        messages: [
            { role: AIChatRole.SYSTEM, content: systemPrompt },
            { role: AIChatRole.USER, content: userContent }
        ],
        creativity: 0,
    });

    return {
        evaluation: response.choices[0].content,
        status: "EVALUATED",
        judge: "Mistral AI"
    };
  },
});
