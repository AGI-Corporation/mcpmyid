
import { createAction, Property } from "@activepieces/pieces-framework";

export const orchestrationAction = createAction({
  name: "orchestrate",
  displayName: "Chief Mental Health Orchestrator",
  description: "Coordinates the mental health swarm's activities, aligning them with clinical objectives and ethical standards.",
  props: {
    instruction: Property.LongText({
      displayName: "Instruction",
      description: "Instructions for the orchestrator to manage the swarm.",
      required: true,
      aiDescription: "The high-level clinical objective or user care instruction.",
      examples: ["Prioritize crisis intervention for user XYZ", "Adjust CBT plan based on recent sleep patterns"]
    })
  },
  async run(context) {
    return {
      status: "COORDINATING",
      orchestrator: "Chief Mental Health Orchestrator",
      message: "The orchestrator has received the instructions and is aligning the swarm with clinical objectives.",
      instruction: context.propsValue.instruction
    };
  },
});
