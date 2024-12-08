import * as yup from "yup";

export type Attributes = {
  label: string;
  placeholder: string;
  subLabel: string;
  required: boolean;
};
export const attributes: Attributes = {
  label: "Please provide your email",
  placeholder: "hello@example.com",
  subLabel: "Helper text about this field",
  required: true,
};

export const validationSchema = yup.object().shape({
  label: yup.string().required().label("Label"),
  placeholder: yup.string().required().label("Placeholder"),
  subLabel: yup.string().required().label("Sub Label"),
  required: yup.boolean().label("Required"),
});
