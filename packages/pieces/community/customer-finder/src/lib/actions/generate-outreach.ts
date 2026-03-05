
import { createAction, Property } from "@activepieces/pieces-framework";

export const generateOutreachAction = createAction({
  name: "generate_outreach",
  displayName: "Generate Outreach Copy",
  description: "Generates personalized outreach messages for potential customers.",
  props: {
    customer_name: Property.ShortText({
      displayName: "Customer Name",
      required: true,
      aiDescription: "The name of the lead or company to personalize for."
    }),
    product_service: Property.ShortText({
      displayName: "Your Product/Service",
      required: true,
      aiDescription: "What you are offering to the customer."
    }),
    tone: Property.StaticDropdown({
        displayName: "Tone",
        required: true,
        options: {
            options: [
                { label: "Professional", value: "professional" },
                { label: "Casual", value: "casual" }
            ]
        }
    })
  },
  async run(context) {
    const { customer_name, product_service, tone } = context.propsValue;

    if (tone === "professional") {
        return `Dear ${customer_name},\n\nI am reaching out to introduce our latest solution in ${product_service}. We believe this could significantly benefit your operations.\n\nBest regards.`;
    }
    return `Hey ${customer_name}!\n\nJust saw what you're doing and thought ${product_service} would be a great fit. Let's chat!\n\nCheers.`;
  },
});
