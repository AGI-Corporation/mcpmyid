## 2025-05-15 - [Secure postMessage origins in OAuth2 flow]
**Vulnerability:** Use of `*` wildcard as target origin in `window.postMessage` during OAuth2 redirection, which could leak authorization codes to malicious windows.
**Learning:** The codebase has multiple places (frontend and backend) where `postMessage` is used to communicate the OAuth code back to the opener.
**Prevention:** Use `window.location.origin` on the client and `domainHelper.getPublicUrl` on the server to resolve the trusted frontend origin. Always extract only the origin (scheme + host + port) using `new URL(url).origin` to ensure strict matching by the browser.
