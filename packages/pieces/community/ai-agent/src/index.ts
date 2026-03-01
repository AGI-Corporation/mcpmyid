
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { optimalWorkflowAction } from "./lib/actions/optimal-workflow";

export const aiAgent = createPiece({
  displayName: "AI Agent",
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.50.2',
  logoUrl: "https://cdn.activepieces.com/pieces/ai-agent.svg",
  authors: ['Jules'],
  description: 'Adaptive AI Agent with Cactus-optimized workflows',
  actions: [optimalWorkflowAction],
  triggers: [],
});
