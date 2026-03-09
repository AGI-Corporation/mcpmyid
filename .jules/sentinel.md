## 2025-05-15 - [Secure OAuth Code Transmission]
**Vulnerability:** OAuth2 codes were sent to parent windows via `postMessage` using a wildcard (`'*'`) target origin, and the frontend used an insecure `startsWith` check for origin verification.
**Learning:** Monorepo architectures with multi-platform/tenant support (like Activepieces) require dynamic resolution of the frontend origin on the server to securely lock down `postMessage` targets.
**Prevention:** Always resolve the specific platform's base URL and extract its origin before sending sensitive data via `postMessage`. In the frontend, use strict equality (`===`) for origin comparison.
