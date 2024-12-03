import * as yup from "yup";

export type Attributes = {
  firstNameLabel: string;
  firstNamePlaceholder: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
  defaultFirstNameValue: string;
  defaultLastNameValue: string;
  subLabel: string;
  required: boolean;
};
export const attributes: Attributes = {
  firstNameLabel: "First Name",
  firstNamePlaceholder: "Enter your first name",
  lastNameLabel: "Last Name",
  lastNamePlaceholder: "Enter your last name",
  defaultFirstNameValue: "",
  defaultLastNameValue: "",
  subLabel: "Please provide your first and last name",
  required: true,
};

export const validationSchema = yup.object().shape({
  firstNameLabel: yup.string().required().label("First Name Label"),
  firstNamePlaceholder: yup.string().required().label("First Name Placeholder"),
  lastNameLabel: yup.string().required().label("Last Name Label"),
  lastNamePlaceholder: yup.string().required().label("Last Name Placeholder"),
  defaultFirstNameValue: yup.string().label("Default First Name Value"),
  defaultLastNameValue: yup.string().label("Default Last Name Value"),
  subLabel: yup.string().required().label("Sub Label"),
  required: yup.boolean().label("Required"),
});
