import * as yup from "yup";
export type Attributes = {
  content: string;
};
export const attributes: Attributes = {
  content: "",
};
export const validationSchema = yup.object().shape({
  content: yup.string().required().label("Label"),
});
