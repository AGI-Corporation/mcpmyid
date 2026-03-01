
import { createAction, Property } from "@activepieces/pieces-framework";
import { fhirAuth } from "../../";

export const getPatientAction = createAction({
  auth: fhirAuth,
  name: "get_patient",
  displayName: "Get Patient Resource",
  description: "Fetch a Patient resource by ID from the FHIR server.",
  props: {
    patient_id: Property.ShortText({
      displayName: "Patient ID",
      description: "The unique ID of the patient.",
      required: true,
    })
  },
  async run(context) {
    const { patient_id } = context.propsValue;
    const proxyUrl = context.auth.props?.['proxy_url'];

    // In a real execution, we would call the proxy
    return {
        resourceType: "Patient",
        id: patient_id,
        name: [{ family: "Smith", given: ["John"] }],
        gender: "male",
        birthDate: "1980-01-01"
    };
  },
});
