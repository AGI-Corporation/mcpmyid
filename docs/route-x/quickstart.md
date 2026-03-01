# ⚡ Route.X Quickstart Guide

Get your research-backed, decentralized Route.X up and running in 5 minutes.

## Step 1: AI-ify your Pieces
The Route.X needs semantic metadata to perform its **Adaptive Repair**. Use the CLI to suggest optimized metadata for any piece:

```bash
npx ap agent optimize @activepieces/piece-gmail
```

This will analyze the actions and suggest `aiDescription` and `examples` fields to add to your piece code.

## Step 2: Create a Blended Super-Tool
Instead of exposing 100 small tools, "blend" them into a high-level capability for your agent.

1. Open your Activepieces flow.
2. Add the **Route.X** piece.
3. In **Virtual Tool Definition**, map your actions:
   ```json
   {
     "name": "CustomerRelator",
     "baseActions": [
       { "piece": "hubspot", "action": "find_contact" },
       { "piece": "gmail", "action": "send_email" }
     ]
   }
   ```
4. Define **Guido Rules** to ensure the agent always provides a `contactId` before emailing.

## Step 3: Publish to the Open Web (NANDA)
Expose your agent to the decentralized ecosystem so other agents can discover and trust it.

```bash
npx ap agent nanda-publish my-agent --index https://index.projectnanda.org
```

Your agent is now discoverable via `/.well-known/agent.json` and follows the **Cactus-Optimized** execution protocol.

## 🚀 Next Steps
- [View Sample Workflows](../../examples/route-x/)
- [Read the Framework Manifesto](../../AGENT_FRAMEWORK.md)
