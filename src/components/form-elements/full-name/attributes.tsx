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
