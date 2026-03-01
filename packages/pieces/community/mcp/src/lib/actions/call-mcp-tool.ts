
import { createAction, Property } from "@activepieces/pieces-framework";
import { httpClient, HttpMethod, AuthenticationType } from "@activepieces/pieces-common";

export const callMcpToolAction = createAction({
  name: "call_mcp_tool",
  displayName: "Call MCP Tool",
  aiDescription: "Directly call a tool on an external MCP server. Use this to extend agent capabilities with external specialized services like Postgres, Slack, or custom Mistral MCP servers.",
  description: "Directly call a tool on an external MCP server (e.g. Mistral MCP, Postgres MCP).",
  props: {
    server_url: Property.ShortText({
      displayName: "MCP Server URL",
      required: true,
      description: "The base URL of the MCP server (SSE endpoint)",
      placeholder: "https://your-mcp-server.com/sse"
    }),
    tool_name: Property.ShortText({
      displayName: "Tool Name",
      required: true,
      aiDescription: "The exact name of the tool as defined on the MCP server.",
    }),
    tool_args: Property.Json({
      displayName: "Tool Arguments",
      required: true,
      defaultValue: {},
      aiDescription: "The JSON arguments required by the MCP tool.",
    }),
    auth_token: Property.SecretText({
        displayName: "Auth Token",
        required: false,
        description: "Optional Bearer token for authentication"
    })
  },
  async run(context) {
    const { server_url, tool_name, tool_args, auth_token } = context.propsValue;

    const response = await httpClient.sendRequest({
      method: HttpMethod.POST,
      url: `${server_url}/tools/${tool_name}/call`,
      authentication: auth_token ? {
        type: AuthenticationType.BEARER_TOKEN,
        token: auth_token,
      } : undefined,
      body: tool_args
    });

    return response.body;
  },
});
