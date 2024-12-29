import React from "react";
import { FormElement, FormElementInstance } from "../../form-elements/types";

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
  isGoogleJsAPILoaded: boolean;
  googleJsAPIError: Error | undefined;
  elements: FormElementInstance[];
  registeredBlocks: FormElement[];
  addElement: (params: AddElementFnParams) => void;
  updateElement: (params: { element: FormElementInstance }) => void;
  deleteElement: (params: { element: FormElementInstance }) => void;
  changeElementOrder: (params: ChangeElementFnParams) => void;
};
export const Context = React.createContext<BuilderUtils>({
  isGoogleJsAPILoaded: false,
  googleJsAPIError: undefined,
  elements: [],
  addElement: () => {},
  updateElement: () => {},
  deleteElement: () => {},
  changeElementOrder: () => {},
  registeredBlocks: [],
});
