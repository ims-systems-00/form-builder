import React from "react";
import { FormElementInstance } from "../../form-elements/types";

export type AddElementFnParams = {
  element: FormElementInstance;
  beforeElementId?: string | null;
  afterElementId?: string | null;
};
export type ChangeElementFnParams = {
  elementId: string;
  beforeElementId?: string | null;
  afterElementId?: string | null;
};

export type BuilderUtils = {
  elements: FormElementInstance[];
  addElement: (params: AddElementFnParams) => void;
  updateElement: (params: { element: FormElementInstance }) => void;
  deleteElement: (params: { element: FormElementInstance }) => void;
  changeElementOrder: (params: ChangeElementFnParams) => void;
};
export const Context = React.createContext<BuilderUtils>({
  elements: [],
  addElement: () => {},
  updateElement: () => {},
  deleteElement: () => {},
  changeElementOrder: () => {},
});
