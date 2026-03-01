# Route.X Technical Architecture

This document outlines the unified architecture of the **Activepieces Route.X**, integrating research-backed protocols for adaptive execution, logic-based governance, and decentralized discovery.

## 📐 Unified Framework Overview

The Route.X acts as a high-reliability middleware stack between Route.Xs and the Activepieces piece ecosystem.

```mermaid
graph TD
    subgraph "Phase 1: Discovery (NANDA)"
        UserAgent([Route.X]) -->|Negotiate| Manifest[/.well-known/agent.json]
        Manifest -->|Broadcasting| Index[NANDA Global Index]
    end

    subgraph "Phase 2: Governance (Guido)"
        Manifest -->|Validated Request| RuleEngine{Guido Rule Engine}
        RuleEngine -->|SET/NOT/CONTAINS| Policy[Business Policy]
    end

    subgraph "Phase 3: Adaptive Execution (Cactus)"
        Policy -->|Optimized Payload| CactusPipeline{Cactus Adaptive Pipeline}
        CactusPipeline --> L1[Difficulty Estimation]
        CactusPipeline --> L3[Adaptive Repair]
        CactusPipeline --> L4[Semantic Guardrails]
        CactusPipeline --> L7[Deterministic Extraction]
    end

    subgraph "Phase 4: Execution & Feedback"
        L7 -->|Verified Params| Sandbox[[Action Sandbox]]
        Sandbox -->|Result| Answer[Generate Answer]
        Answer -->|Mistral Judge| Eval{RAG Evaluation}
        Eval -->|Groundedness| Feedback[Strategic Agent Feedback]
    end

    style L1 fill:#f9f,stroke:#333
    style L3 fill:#bbf,stroke:#333
    style L4 fill:#bfb,stroke:#333
    style L7 fill:#fbb,stroke:#333
    style Eval fill:#fffbba,stroke:#333
```

---

## 🚀 The Four Research Pillars

### 1. CactusRoute (Adaptive Routing)
**Goal**: 99.9% tool-calling reliability.
- **Layer 1 (Difficulty)**: Routes "easy" queries to fast SLMs and "hard" queries to reasoning-heavy models.
- **Layer 3 (Repair)**: Neuro-symbolic layer that auto-corrects LLM formatting errors (JSON, dates, units).
- **Layer 4 (Guardrails)**: Semantic cross-verification to prevent hallucinations.
- **Layer 7 (Fallback)**: High-precision regex extraction to rescue tool calls when the model fails.

### 2. Guido (Rule Engine)
**Goal**: Deterministic governance of autonomous tools.
- **Nested Pathing**: Support for validating deeply nested JSON objects.
- **State Logic**: Enforces `SET`, `SET_TO_VALUE`, `CONTAINS`, and `NOT` conditions.
- **Virtual Tooling**: Allows "blending" multiple piece actions into a single safe interface.

### 3. NANDA Protocol (Discovery)
**Goal**: Decentralized, trillion-scale agent interoperability.
- **AgentFacts (JSON-LD)**: Standardized capability manifests.
- **Verified Trust Anchors**: Secure tool-sharing via cryptographic anchors.
- **Federated Indexing**: Peer-to-peer discovery via standardized `/.well-known/` paths.

### 4. Mistral Evaluation (Observability)
**Goal**: Real-time quality control for RAG systems.
- **LLM as a Judge**: Uses Mistral Large to score outputs for context relevance and answer relevance.
- **Hallucination Detection**: Specific check for factual groundedness against source-of-truth contexts.
- **Structured Feedback**: Returns machine-readable evaluation reports to the calling agent.

---

## 🛠️ System Components

| Component | Responsibility | Technical Stack |
|-----------|----------------|-----------------|
| `mcp-server.ts` | Entry point for MCP/Agent requests | Model Context Protocol SDK |
| `cactus-utils.ts` | Adaptive repair and extraction logic | Regex, Neuro-symbolic heuristics |
| `virtual-tool-service.ts` | Tool blending and Guido rule execution | TypeORM, JSONPath logic |
| `nanda-manifest-service.ts` | Capability negotiation and manifest gen | JSON-LD, NANDA v1.0 |
| `evaluate-rag.ts` | Automated quality scoring | Mistral AI, Structured Outputs |
