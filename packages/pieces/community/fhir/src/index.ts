
import { createPiece, PieceAuth, Property } from "@activepieces/pieces-framework";

export const fhirAuth = PieceAuth.OAuth2({
    description: "Authenticate with your SMART on FHIR Proxy (e.g., Proxy Smart).",
    authUrl: "{proxy_url}/oauth/authorize",
    tokenUrl: "{proxy_url}/oauth/token",
    required: true,
    scope: ["openid", "fhirUser", "patient/*.read", "launch"],
    props: {
        proxy_url: Property.ShortText({
            displayName: "Proxy Smart URL",
            description: "The base URL of your Proxy Smart instance (e.g., https://proxy.health.org)",
            required: true,
        })
    }
});

export const fhir = createPiece({
  displayName: "FHIR",
  auth: fhirAuth,
  minimumSupportedRelease: '0.50.2',
  logoUrl: "https://cdn.activepieces.com/pieces/fhir.svg",
  authors: ['Jules'],
  description: 'Healthcare interoperability via FHIR R4 and SMART App Launch.',
  actions: [getPatientAction],
  triggers: [],
});
