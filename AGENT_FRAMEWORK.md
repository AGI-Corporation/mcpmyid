# Activepieces Agent OS: The Unified Tool Framework

Welcome to the **Activepieces Agent OS**, a research-backed framework designed to optimize the bridge between automated workflows and autonomous AI agents.

## 🚀 The Three Pillars

### 1. Cactus-Optimized Execution (Adaptive Routing)
Based on the **CactusRoute** 7-layer framework, every tool call in Activepieces is now optimized for the most reliable agentic experience:
- **Adaptive Repair**: Auto-corrects common LLM mistakes (time formats, negative numbers).
- **Semantic Guardrails**: Real-time hallucination detection by cross-checking prompts.
- **Deterministic Fallback**: Regex-based extraction to rescue failed LLM tool calls.

### 2. NANDA Protocol Integration (Decentralized Discovery)
Activepieces implements the **NANDA Stack** for the Open Agentic Web:
- **AgentFacts (JSON-LD)**: Standardized discovery format for trillion-scale agent indexing.
- **Verified Trust Anchors**: Secure tool-sharing with explicit governance and reward models.
- **Standardized Pathing**: Discovery via `/.well-known/agent.json`.

### 3. Virtual Tool Orchestration (Guido Rule Engine)
Inspired by the **Guido** configuration manager, users can now build high-level "super-tools":
- **Tool Blending**: Aggregate properties from 280+ pieces into single optimized interfaces.
- **Conditional Validation**: Define logic-based rules to ensure data integrity during tool use.

## 🧩 New Framework Components

| Component | Purpose |
|-----------|---------|
| `cactus-utils.ts` | The neuro-symbolic engine for repair and validation. |
| `nanda-manifest-service.ts` | Generates the decentralized capability manifest. |
| `virtual-tool-service.ts` | Handles the blending of tools and rule execution. |
| `AI Agent Piece` | The user-facing bridge to trigger optimized workflows. |

## 🛠️ How to use the optimized metadata
Piece developers can now add AI-specific context to their actions:

```typescript
export const myAction = createAction({
  name: 'send_email',
  aiDescription: 'High-priority tool for sending notifications to users.',
  props: {
    email: Property.ShortText({
      displayName: 'Email',
      aiDescription: 'The recipient email address found in the user prompt.',
      examples: ['jules@example.com']
    })
  },
  // ...
})
```

## 📚 Resources
- **[Quickstart Guide](docs/agent-os/quickstart.md)**: 3-step setup for research-backed Agents.
- **[Sample Templates](examples/agent-os/)**: Example workflows for CRM, Support, and Discovery.
- **[CLI Reference](packages/cli/src/lib/commands/agent-optimize.ts)**: Optimization and Publishing commands.

By combining robust metadata with adaptive execution and decentralized discovery, Activepieces is now the foundational operating system for the next generation of AI Agents.
