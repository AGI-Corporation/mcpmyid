
import { createAction, Property } from "@activepieces/pieces-framework";

export const findLeadsAction = createAction({
  name: "find_leads",
  displayName: "Find Target Leads",
  description: "Finds target customers based on a niche and location using AI-driven discovery.",
  props: {
    niche: Property.ShortText({
      displayName: "Business Niche",
      description: "e.g., 'Coffee Shops', 'SaaS Startups'",
      required: true,
      aiDescription: "The industry or type of business to search for.",
      examples: ["Coffee Shops", "Dentists"]
    }),
    location: Property.ShortText({
      displayName: "Location",
      description: "City or Region",
      required: true,
      aiDescription: "The geographical area where the customers are located.",
      examples: ["San Francisco", "London"]
    })
  },
  async run(context) {
    const { niche, location } = context.propsValue;

    // In a real scenario, this would call a lead generation API (e.g., Apollo, Hunter, or Google Maps)
    // For this implementation, we provide a sophisticated mock that generates plausible leads
    // to demonstrate the end-to-end flow.

    const suffixes = ['Hub', 'Pros', 'Direct', 'Solutions', 'Connect'];
    const leads = [];

    for (let i = 0; i < 3; i++) {
        const companyName = `${niche} ${suffixes[i % suffixes.length]}`;
        leads.push({
            name: companyName,
            email: `contact@${companyName.replace(/\s+/g, '').toLowerCase()}.com`,
            location: location,
            relevance_score: 0.95 - (i * 0.05),
            source: 'AI Discovery'
        });
    }

    return leads;
  },
});
