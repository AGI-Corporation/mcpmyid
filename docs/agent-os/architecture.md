# Agent OS Architecture

This document provides a technical deep-dive into how Agent OS processes tool calls and discovery requests.

## 1. The Cactus-Optimized Execution Pipeline

Every time an AI agent calls an Activepieces tool via MCP, it passes through the **Cactus Adaptive Layer**. This pipeline is designed to rescue failed tool calls and ensure the highest possible success rate.

```mermaid
graph TD
    UserQuery[User Query / Task] --> L1[Layer 1: Difficulty Estimation]
    L1 --> LLM[LLM Tool Call Generation]
    LLM --> L3[Layer 3: Adaptive Repair]
    L3 --> L4[Layer 4: Semantic Guardrails]
    L4 -- Valid --> Exec[Execute Piece Action]
    L4 -- Invalid --> L7[Layer 7: Deterministic Extraction]
    L7 -- Success --> Exec
    L7 -- Failure --> Error[Return Error to Agent]
    Exec --> Result[Return Result]
```

### Layer Breakdown:
- **Layer 1**: Assesses if the query is "easy", "medium", or "hard" based on verb count and multi-intent markers.
- **Layer 3**: Fixes common formatting issues (e.g., converting "3pm" to 24h format for an integer field).
- **Layer 4**: Cross-references the generated parameters against the original user query to detect hallucinations.
- **Layer 7**: If the LLM fails, we use high-precision regex patterns to extract the intent directly from the user's text.

## 2. Decentralized Discovery (NANDA)

Agent OS doesn't rely on a central registry. Instead, it uses the **NANDA Protocol** to enable peer-to-peer discovery.

```mermaid
sequenceDiagram
    participant Agent
    participant AP as Activepieces Agent OS
    participant Index as NANDA Index

    AP->>Index: Announce (AgentFacts JSON-LD)
    Agent->>Index: Query for 'Customer CRM' capability
    Index-->>Agent: Return AP Endpoint URL
    Agent->>AP: GET /.well-known/agent.json
    AP-->>Agent: Full Capability Manifest
    Agent->>AP: MCP Tool Call (Cactus-Optimized)
```

## 3. The Evaluation Loop (LLM as a Judge)

Agent OS includes a built-in evaluation layer to ensure the quality of RAG-based tool executions.

```mermaid
graph LR
    Task[Agent Task] --> Exec[Execute Tool]
    Exec --> Result[Generate Answer]
    Result --> Eval{Mistral Judge}
    Eval --> CR[Context Relevance]
    Eval --> AR[Answer Relevance]
    Eval --> G[Groundedness]
    CR --> Feedback[Feedback to Strategic Agent]
    AR --> Feedback
    G --> Feedback
```

## 4. Virtual Tool Orchestration (Guido)

The Guido rule engine allows for the composition of complex, safe interfaces.

```mermaid
graph LR
    subgraph "Virtual Tool: CustomerRelator"
        Rules[Guido Rules]
        Rules --> G1[HubSpot: Find Contact]
        Rules --> G2[Gmail: Send Email]
    end

    subgraph "Validation Logic"
        Condition{If contactId is missing}
        Condition -- Yes --> Target[Force search first]
        Condition -- No --> Target2[Allow email]
    end
```
