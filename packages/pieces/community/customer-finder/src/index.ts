
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { findLeadsAction } from "./lib/actions/find-leads";
import { generateOutreachAction } from "./lib/actions/generate-outreach";

export const customerFinder = createPiece({
  displayName: "Customer Finder",
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.50.2',
  logoUrl: "https://cdn.activepieces.com/pieces/customer-finder.svg",
  authors: ['Jules'],
  description: 'AI-powered tool to find target customers and generate outreach copy.',
  actions: [findLeadsAction, generateOutreachAction],
  triggers: [],
});
