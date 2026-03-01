
import { createAction, Property } from "@activepieces/pieces-framework";

export const crisisManagerAction = createAction({
  name: "crisis_manager",
  displayName: "Crisis Manager Agent",
  description: "Special oversight agent focusing on high-risk situations. Triggers highest-priority protocols.",
  props: {
    risk_level: Property.StaticDropdown({
        displayName: "Risk Level",
        required: true,
        options: {
            options: [
                { label: "Low", value: "low" },
                { label: "Moderate", value: "moderate" },
                { label: "High", value: "high" },
                { label: "Critical", value: "critical" }
            ]
        },
        aiDescription: "The estimated risk level based on user interactions."
    }),
    observations: Property.LongText({
        displayName: "Observations",
        required: true,
        aiDescription: "Clinical observations leading to the crisis alert."
    })
  },
  async run(context) {
    return {
      status: "CRISIS_PROTOCOL_ACTIVATED",
      priority: context.propsValue.risk_level === "critical" ? "P0" : "P1",
      actions: ["Alert human therapist", "Provide emergency resources", "Initiate grounding protocol"]
    };
  },
});
