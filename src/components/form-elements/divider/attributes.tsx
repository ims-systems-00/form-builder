import * as yup from "yup";

export type Attributes = {
  paddingTop: {
    label:
      | "None"
      | "Extra Small"
      | "Small"
      | "Medium"
      | "Large"
      | "Extra Large";
    value: "pt-0" | "pt-1" | "pt-2" | "pt-3" | "pt-4" | "pt-5";
  };
  paddingBottom: {
    label:
      | "None"
      | "Extra Small"
      | "Small"
      | "Medium"
      | "Large"
      | "Extra Large";
    value: "pb-0" | "pb-1" | "pb-2" | "pb-3" | "pb-4" | "pb-5";
  };
  color: string;
};

export const attributes: Attributes = {
  paddingTop: {
    label: "Small",
    value: "pt-3",
  },
  paddingBottom: {
    label: "Small",
    value: "pb-3",
  },
  color: "#e5e7eb",
};

export const validationSchema = yup.object().shape({
  paddingTop: yup.object().shape({
    label: yup.string().label("Label"),
    value: yup.string().label("Value"),
  }),
  paddingBottom: yup.object().shape({
    label: yup.string().label("Label"),
    value: yup.string().label("Value"),
  }),
  color: yup.string().label("Color"),
});
