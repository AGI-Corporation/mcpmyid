
import { createAction, Property } from "@activepieces/pieces-framework";
import { agentSwarmData } from "../agents";

export const callAgentAction = createAction({
  name: "call_agent",
  displayName: "Call Swarm Agent",
  description: "Interact with a specific agent from the mental health swarm.",
  props: {
    category: Property.StaticDropdown({
        displayName: "Category",
        required: true,
        options: {
            options: Object.keys(agentSwarmData).map(cat => ({
                label: cat.charAt(0).toUpperCase() + cat.slice(1),
                value: cat
            }))
        }
    }),
    agent_name: Property.ShortText({
        displayName: "Agent Name",
        description: "The name of the agent to call (e.g., 'Mood Tracker Agent').",
        required: true,
        aiDescription: "The specific agent name discovered in the swarm registry.",
        examples: ["Mood Tracker Agent", "Crisis Manager Agent", "Therapy Program Planner"]
    }),
    message: Property.LongText({
        displayName: "Message",
        required: true,
        aiDescription: "The clinical or support message to send to the agent."
    })
  },
  async run(context) {
    const { category, agent_name, message } = context.propsValue;
    const agents = agentSwarmData[category] || [];
    const agent = agents.find(a => a.name === agent_name);

    if (!agent) {
        return {
            status: "AGENT_NOT_FOUND",
            error: `Agent '${agent_name}' not found in category '${category}'.`
        };
    }

    return {
      status: "COMPLETED",
      agent: {
          name: agent.name,
          role: agent.role,
          description: agent.description
      },
      response: `[Simulated response from ${agent.name}]: Processing message: "${message}" using tools: ${agent.tools.join(", ")}`
    };
  },
});
