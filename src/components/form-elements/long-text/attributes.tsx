import * as yup from "yup";

export type Attributes = {
  label: string;
  placeholder: string;
  subLabel: string;
  required: boolean;
};
export const attributes: Attributes = {
  label: "[Field Label]",
  placeholder: "[Place holder]",
  subLabel: "[Helper text about this field]",
  required: false,
};

export const validationSchema = yup.object().shape({
  label: yup.string().required().label("Label"),
  placeholder: yup.string().required().label("Placeholder"),
  subLabel: yup.string().required().label("Sub Label"),
  required: yup.boolean().label("Required"),
});
