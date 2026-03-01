# Contributing to Agent OS

Help us build the Internet of Agents!

## 🏗️ Architecture

Agent OS consists of three core components:
1. **CactusRoute**: Adaptive routing and repair logic.
2. **NANDA**: Decentralized discovery protocol.
3. **Guido**: Virtual tool orchestration.

## 🛠️ Development

### Local Setup
1. Clone the repository.
2. Run `npm install`.
3. Start the dev server: `npm run dev`.

### Adding Pieces
Pieces should follow the standard Activepieces framework. Agentic pieces live in `packages/pieces/community/mcp` and `fhir`.

### Testing
Use the built-in MCP server to test your tools with agents.
