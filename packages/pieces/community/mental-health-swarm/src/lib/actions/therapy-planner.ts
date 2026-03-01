
import { createAction, Property } from "@activepieces/pieces-framework";

export const therapyPlannerAction = createAction({
  name: "therapy_planner",
  displayName: "Therapy Program Planner",
  description: "Designs structured therapy programs (e.g., CBT, mindfulness plans) tailored to user goals.",
  props: {
    user_goal: Property.ShortText({
      displayName: "User Goal",
      required: true,
      aiDescription: "The mental health goal of the user, e.g., 'reduce anxiety'.",
      examples: ["Reduce anxiety attacks", "Improve sleep hygiene"]
    }),
    modality: Property.StaticDropdown({
        displayName: "Modality",
        required: true,
        options: {
            options: [
                { label: "CBT", value: "CBT" },
                { label: "Mindfulness", value: "Mindfulness" },
                { label: "DBT", value: "DBT" }
            ]
        }
    })
  },
  async run(context) {
    return {
      status: "PLAN_CREATED",
      planner: "Therapy Program Planner",
      plan: {
          modality: context.propsValue.modality,
          goal: context.propsValue.user_goal,
          steps: ["Initial assessment", "Weekly check-ins", "Progress review"]
      }
    };
  },
});
