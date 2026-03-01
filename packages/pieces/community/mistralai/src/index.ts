
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { askMistral } from "./lib/actions/ask-mistral";
import { PieceCategory } from "@activepieces/shared";

export const mistralaiAuth = PieceAuth.SecretText({
  displayName: "API Key",
  required: true,
  description: "Get your API key from [Mistral AI Console](https://console.mistral.ai/api-keys/)."
});

export const mistralai = createPiece({
  displayName: "Mistral AI",
  auth: mistralaiAuth,
  minimumSupportedRelease: '0.50.2',
  logoUrl: "https://cdn.activepieces.com/pieces/mistralai.png",
  authors: ['Jules'],
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  description: 'Native Mistral AI integration for high-performance open-weight models.',
  actions: [askMistral],
  triggers: [],
});
