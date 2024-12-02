export type Attributes = {
  text: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  alignment: "left" | "center" | "right";
};

export const attributes: Attributes = {
  text: "Header Text",
  level: "h3",
  alignment: "left",
};
