import React from "react";
import { FormElementInstance } from "../../form-elements/types";

export type AddElementParams = {
  element: FormElementInstance;
  beforeElement: FormElementInstance;
  afterElement: FormElementInstance;
};

export type BuilderUtils = {
  elements: FormElementInstance[];
  addElement: (params: AddElementParams) => void;
  updateElement: (params: { element: FormElementInstance }) => void;
  deleteElement: (params: { element: FormElementInstance }) => void;
};
export const Context = React.createContext<BuilderUtils>({
  elements: [],
  addElement: () => {},
  updateElement: () => {},
  deleteElement: () => {},
});
