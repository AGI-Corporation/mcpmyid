
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { replyToMcpClient } from "./lib/actions/reply-to-mcp-client";
import { optimalWorkflowAction } from "./lib/actions/optimal-workflow";
import { callMcpToolAction } from "./lib/actions/call-mcp-tool";
import { mcpTool } from "./lib/triggers/mcp-tool";

export const mcp = createPiece({
  displayName: "Agent OS",
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.50.2',
  logoUrl: "https://cdn.activepieces.com/pieces/mcp.svg",
  authors: ['Gamal72', 'hazemadelkhalel', 'Jules'],
  description: 'The foundational operating system for AI Agents, featuring Cactus routing, NANDA discovery, and Guido virtual tools.',
  actions: [replyToMcpClient, optimalWorkflowAction, callMcpToolAction],
  triggers: [mcpTool],
});
