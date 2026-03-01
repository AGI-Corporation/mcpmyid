# Route.X Piece

The Route.X piece is the control center for optimized AI workflows in Activepieces. It leverages the **Activepieces Route.X** framework to provide the most reliable tool-calling and discovery experience.

## Features

### 🚀 Optimal Workflow Agent
Automatically routes and repairs your AI tasks using the CactusRoute 7-layer framework. It ensures that any tools used by the agent are:
1. **Self-Correcting**: Automatically fixes formatting and type errors.
2. **Hallucination-Proof**: Validates that arguments are grounded in your prompt.
3. **Resilient**: Uses deterministic extraction as a fallback for failed LLM calls.

### 🧩 NANDA Protocol Support
Link your agent to the "Internet of Agents" via the NANDA Protocol.
- Simply copy the **Plugin Link** provided in the action to register this flow with external NANDA-compliant indexes.
- Allows for decentralized tool discovery and collaboration.

### 🧪 Virtual Tool Blending
Craft your own high-level tools by "blending" multiple actions.
- Map properties from different pieces (e.g., Sheets + Slack) into a single tool definition.
- Use the **Guido-inspired Rule Engine** to enforce complex data dependencies.

## Configuration

| Property | Description |
|----------|-------------|
| **Task / Prompt** | The natural language instruction for the agent. |
| **Model Name** | The LLM to use for orchestration (default: gpt-4o). |
| **NANDA Index URL** | (Optional) The decentralized index to announce your agent capabilities to. |
| **Virtual Tool Definition** | (Optional) A JSON mapping of base actions to create a blended super-tool. |

## Documentation Link
For more details on the underlying framework, see [AGENT_FRAMEWORK.md](../../../../AGENT_FRAMEWORK.md) in the project root.
