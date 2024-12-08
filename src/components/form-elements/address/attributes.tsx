import * as yup from "yup";

export type Attributes = {
  streetAddressPlaceholder: string;
  streetAddressLabel: string;
  streetAddressLine2Placeholder: string;
  streetAddressLine2Label: string;
  cityPlaceholder: string;
  cityLabel: string;
  statePlaceholder: string;
  stateLabel: string;
  postalCodePlaceholder: string;
  postalCodeLabel: string;
  required: boolean;
};

export const attributes: Attributes = {
  streetAddressPlaceholder: "+28 Old Brompton Road",
  streetAddressLabel: "Street Address",
  streetAddressLine2Placeholder: "South Kensington",
  streetAddressLine2Label: "Street Address Label 2",
  cityPlaceholder: "London",
  cityLabel: "City",
  statePlaceholder: "London",
  stateLabel: "state",
  postalCodePlaceholder: "SW7 3SS",
  postalCodeLabel: "postal code",
  required: false,
};

export const validationSchema = yup.object().shape({
  streetAddressPlaceholder: yup
    .string()
    .required()
    .label("Street Address Placeholder"),
  streetAddressLabel: yup.string().required().label("Street Address Label"),
  streetAddressLine2Placeholder: yup
    .string()
    .required()
    .label("Street Address Line2 Placeholder"),
  streetAddressLine2Label: yup
    .string()
    .required()
    .label("Street Address Line2 Label"),
  cityPlaceholder: yup.string().required().label("City Placeholder"),
  cityLabel: yup.string().required().label("City Label"),
  statePlaceholder: yup.string().required().label("State Placeholder"),
  stateLabel: yup.string().required().label("State Label"),
  postalCodePlaceholder: yup
    .string()
    .required()
    .label("Postal Code Placeholder"),
  postalCodeLabel: yup.string().required().label("Postal Code Label"),
  required: yup.boolean().label("Required"),
});
