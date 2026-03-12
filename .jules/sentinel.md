## 2025-05-15 - [HIGH] Secure OAuth2 Redirect postMessage

**Vulnerability:** The application was using the wildcard `*` as the `targetOrigin` in `window.postMessage` during the OAuth2 redirect flow, and it was using `startsWith` for origin verification when receiving the message.

**Learning:**
1. Using `*` as a target origin allows any malicious site that can get a reference to the window (e.g., via `window.opener` if the popup was opened from another site or if the site was compromised) to intercept the sensitive OAuth code.
2. Using `startsWith` for origin validation is insecure because it can be bypassed. For example, `https://example.com.attacker.com` starts with `https://example.com`.

**Prevention:**
1. Always specify a precise `targetOrigin` when calling `postMessage`. In the frontend, use `window.location.origin`. On the server, resolve the platform's public URL and extract the origin.
2. Always use strict equality (`===`) when verifying `event.origin` in a message listener to ensure it exactly matches the expected trusted origin.
