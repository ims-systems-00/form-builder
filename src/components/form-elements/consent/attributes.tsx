import * as yup from "yup";

export type Attributes = {
  colorScheme: {
    label:
      | "Primary"
      | "Secondary"
      | "Success"
      | "Danger"
      | "Warning"
      | "Info"
      | "Light"
      | "Dark";
    value:
      | "primary"
      | "secondary"
      | "success"
      | "danger"
      | "warning"
      | "info"
      | "light"
      | "dark";
  };
  disclaimer: string;
  consent: string;
  required: boolean;
};
export const attributes: Attributes = {
  colorScheme: {
    label: "Warning",
    value: "warning",
  },
  disclaimer: "[Disclaimer]",
  consent: "[Consent]",
  required: true,
};

export const validationSchema = yup.object().shape({
  colorScheme: yup.object().shape({
    label: yup.string().required().label("Color Scheme Label"),
    value: yup.string().required().label("Color Scheme Value"),
  }),
  disclaimer: yup.string().required().label("Disclaimer"),
  consent: yup.string().required().label("Consent"),
  required: yup.boolean().label("Required"),
});
