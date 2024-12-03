export type Attributes = {
  label: string;
  placeholder: string;
  defaultValue: string;
  subLabel: string;
  required: boolean;
};
export const attributes: Attributes = {
  label: "Please provide your phone number",
  placeholder: "00000000000",
  defaultValue: "00000000000",
  subLabel: "Helper text about this field",
  required: true,
};
