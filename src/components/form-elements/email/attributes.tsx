export type Attributes = {
  label: string;
  placeholder: string;
  defaultValue: string;
  subLabel: string;
  required: boolean;
};
export const attributes: Attributes = {
  label: "Please provide your email",
  placeholder: "hello@example.com",
  defaultValue: "hello@example.com",
  subLabel: "Helper text about this field",
  required: true,
};
