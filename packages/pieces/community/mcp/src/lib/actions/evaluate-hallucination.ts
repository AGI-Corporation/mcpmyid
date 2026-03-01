import {
  createAction,
  Property,
} from '@activepieces/pieces-framework';
import { AIChatRole, AuthenticationType, HttpMethod, httpClient } from '@activepieces/pieces-common';

export const evaluateHallucination = createAction({
  name: 'evaluate_hallucination',
  displayName: 'Mistral Hallucination Detection',
  description: 'Specific evaluation to detect hallucinations in model outputs using Mistral AI.',
  props: {
    context: Property.LongText({
      displayName: 'Reference Context',
      required: true,
      description: 'The source of truth context'
    }),
    answer: Property.LongText({
      displayName: 'Model Answer',
      required: true,
      description: 'The answer to check for hallucinations'
    }),
    model: Property.ShortText({
        displayName: 'Mistral Model',
        required: true,
        defaultValue: 'mistral-large-latest'
    })
  },
  async run(context) {
    const { context: refContext, answer, model } = context.propsValue;

    const ai = AI({
        provider: 'mistral',
        server: {
            apiUrl: context.server.apiUrl,
            token: context.server.token
        }
    });

    const systemPrompt = `You are an expert at detecting hallucinations in AI outputs.
Compare the provided Answer against the Reference Context.
Identify any claims in the Answer that are NOT supported by or contradict the Context.

Return a JSON object with:
- hallucinated: boolean
- claims: array of { claim: string, status: "supported" | "hallucinated", reasoning: string }`;

    const userContent = `Reference Context: ${refContext}\nModel Answer: ${answer}`;

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
        return {
            ...JSON.parse(content),
            status: "ANALYZED",
            judge: "Mistral AI"
        };
    } catch (e) {
        return {
            raw_analysis: content,
            status: "ANALYZED_RAW",
            judge: "Mistral AI"
        };
    }
  },
});
