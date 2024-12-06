import * as yup from "yup";

export type Attributes = {
  text: string;
  headerSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headerAlignment: "left" | "center" | "end";
  required: boolean;
};

export const attributes: Attributes = {
  text: "[Headline of this section]",
  headerSize: "h4",
  headerAlignment: "left",
  required: true,
};

export const validationSchema = yup.object().shape({
  text: yup.string().required().label("Text"),
  headerSize: yup.string().label("Header Size"),
  headerAlignment: yup.string().label("Header Allignment"),
  required: yup.boolean().label("Required"),
});
