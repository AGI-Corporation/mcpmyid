# Contributing to Route.X

We welcome research-backed contributions to the Activepieces Route.X framework!

## Research Standards
The Route.X is built on peer-reviewed research (CactusRoute, NANDA, Guido). Contributions should ideally follow these standards:
- **Optimization**: Propose improvements to the 7-layer execution stack.
- **Protocol**: Ensure AgentFacts (JSON-LD) compliance for any new metadata fields.
- **Metadata**: Add `aiDescription` and `examples` to every new piece action.

## Development Workflow
1. **Engine**: Core AI utilities live in `packages/server/api/src/app/ai/`.
2. **Pieces**: Agentic pieces live in `packages/pieces/community/route-x` and `fhir`.
3. **CLI**: Add agent-scaling commands in `packages/cli/src/lib/commands/`.

## Quality Gates
- Every new tool must be cross-verified against the `semanticValidate` logic.
- New NANDA capabilities should be documented in the Capability Registry.

Thank you for building the Internet of Agents with us!
