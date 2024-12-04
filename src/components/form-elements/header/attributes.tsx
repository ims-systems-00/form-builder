import * as yup from "yup";

export type Attributes = {
  text: string;
  level: {
    label:
      | "Header 1"
      | "Header 2"
      | "Header 3"
      | "Header 4"
      | "Header 5"
      | "Header 6";
    value: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };
  alignment: {
    label: "Left" | "Center" | "End";
    value: "left" | "center" | "end";
  };
};

export const attributes: Attributes = {
  text: "[Headline of this section]",
  level: { label: "Header 4", value: "h4" },
  alignment: { label: "Left", value: "left" },
};

export const validationSchema = yup.object().shape({
  text: yup.string().required().label("Text"),
  level: yup.object().shape({
    label: yup.string().label("Label"),
    value: yup.string().label("Value"),
  }),
  alignment: yup.object().shape({
    label: yup.string().label("Label"),
    value: yup.string().label("Value"),
  }),
});
