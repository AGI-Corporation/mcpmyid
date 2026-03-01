
import { createAction, Property } from "@activepieces/pieces-framework";
import { httpClient, HttpMethod, AuthenticationType } from "@activepieces/pieces-common";
import { baseUrl } from "../common/common";

export const askMistral = createAction({
  name: "ask_mistral",
  displayName: "Ask Mistral",
  aiDescription: "Send a prompt to a Mistral AI model. Use high-performance models like Mistral Large for complex reasoning or Pixtral for vision-related tasks.",
  description: "Send a prompt to a Mistral AI model (Large, Pixtral, Codestral).",
  props: {
    model: Property.StaticDropdown({
      displayName: "Model",
      aiDescription: "The Mistral AI model to use for generating the response.",
      required: true,
      defaultValue: "mistral-large-latest",
      options: {
        options: [
          { label: "Mistral Large (latest)", value: "mistral-large-latest" },
          { label: "Mistral Small (latest)", value: "mistral-small-latest" },
          { label: "Codestral", value: "codestral-latest" },
          { label: "Pixtral 12B (latest)", value: "pixtral-12b-latest" },
          { label: "Mistral 7B", value: "open-mistral-7b" },
          { label: "Mixtral 8x7B", value: "open-mixtral-8x7b" }
        ]
      }
    }),
    prompt: Property.LongText({
      displayName: "Prompt",
      aiDescription: "The main text or instruction to send to the model.",
      required: true,
      examples: ["Write a Python script to fetch NANDA manifests.", "Explain the Cactus adaptive routing framework."]
    }),
    temperature: Property.Number({
      displayName: "Temperature",
      aiDescription: "Controls the creativity of the output. 0.0 is deterministic, 1.0 is creative.",
      required: false,
      defaultValue: 0.7,
    }),
    max_tokens: Property.Number({
      displayName: "Max Tokens",
      aiDescription: "The maximum number of tokens to generate in the completion.",
      required: false,
    })
  },
  async run(context) {
    const { model, prompt, temperature, max_tokens } = context.propsValue;

    const response = await httpClient.sendRequest({
      method: HttpMethod.POST,
      url: `${baseUrl}/chat/completions`,
      authentication: {
        type: AuthenticationType.BEARER_TOKEN,
        token: context.auth as string,
      },
      body: {
        model,
        messages: [{ role: "user", content: prompt }],
        temperature,
        max_tokens
      }
    });

    return response.body;
  },
});
