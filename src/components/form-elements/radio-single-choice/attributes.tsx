import * as yup from "yup";

export type Attributes = {
  questionText: string;
  options: string[];
  required: boolean;
  // layout: "full" | "half";
};

export const attributes: Attributes = {
  questionText: "Lorem ipsum dolor sit amet consectetur?",
  options: ["Type option 1", "Type option 2", "Type option 3", "Type option 4"],
  required: false,
  // layout: "half",
};

export const validationSchema = yup.object().shape({
  questionText: yup.string().required().label("questionText"),
  options: yup.array().required().label("options"),
  required: yup.boolean().label("Required"),
});
