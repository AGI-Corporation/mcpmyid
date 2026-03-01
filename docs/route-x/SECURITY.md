# Route.X Security Policy

Security in the age of autonomous agents requires new guardrails.

## Supported Versions
We support the latest release of Activepieces Route.X for all AI-specific security updates.

## Reporting a Vulnerability
If you find a vulnerability related to:
- **Prompt Injection**: Circumventing Route.X guardrails.
- **Data Leakage**: Unexpected PHI/PII disclosure through agents.
- **Protocol Spoofing**: Malicious NANDA AgentFacts announcements.

Please email security@activepieces.com. Do not open a public issue.

## AI Guardrails
The framework includes built-in security features:
1. **Semantic Validation**: Cross-checks tool arguments against prompt intent.
2. **Stateless Proxying**: PHI never touches the framework logic (via Proxy Smart).
3. **Governance Flags**: AgentFacts explicitly broadcast data retention policies.
