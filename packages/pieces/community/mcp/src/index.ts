
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { replyToMcpClient } from "./lib/actions/reply-to-mcp-client";
import { evaluateRag } from "./lib/actions/evaluate-rag";
import { evaluateHallucination } from "./lib/actions/evaluate-hallucination";
import { cactusBenchmark } from "./lib/actions/cactus-benchmark";
import { mcpTool } from "./lib/triggers/mcp-tool";

export const mcp = createPiece({
  displayName: "Agent OS",
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.50.2',
  logoUrl: "https://cdn.activepieces.com/pieces/ai-agent.svg",
  authors: ['Gamal72', 'hazemadelkhalel', 'Jules'],
  description: 'Research-backed AI Agent framework with Cactus-optimized workflows and Mistral evaluation.',
  actions: [replyToMcpClient, evaluateRag, evaluateHallucination, cactusBenchmark],
  triggers: [mcpTool],
});
