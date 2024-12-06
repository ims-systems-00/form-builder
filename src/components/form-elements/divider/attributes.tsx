import * as yup from "yup";

export type Attributes = {
  paddingTop: number;
  paddingBottom: number;
  color: string;
  lineWidth: number;
};

export const attributes: Attributes = {
  paddingTop: 30,
  paddingBottom: 30,
  color: "#e5e7eb",
  lineWidth: 2,
};

export const validationSchema = yup.object().shape({
  paddingTop: yup.number().min(0).max(100).required().label("Padding Top"),
  paddingBottom: yup
    .number()
    .min(0)
    .max(100)
    .required()
    .label("Padding Bottom"),
  color: yup.string().required().label("Divider Color"),
  lineWidth: yup.number().min(1).max(10).required().label("Line Width"),
});
