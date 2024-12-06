export type Attributes = {
  questionText: string;
  options: string[];
  required: boolean;
};

export const attributes: Attributes = {
  questionText: "Lorem ipsum dolor onsectetur?",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  required: true,
};
