import React from "react";

export type ElementType = "TextInput";
export type AnyValidJSObject =
  | string
  | number
  | boolean
  | null
  | undefined
  | Array<AnyValidJSObject>
  | { [key: string]: AnyValidJSObject };
export type ValidateFunction = (
  formElement: FormElementInstance,
  currentValue: AnyValidJSObject
) => boolean;
export type FormDesignerButtonType = {
  icon: React.FC<{ size?: number }>;
  text: string;
};
export type FormElementInstance = {
  id: string;
  type: ElementType;
  attributes: Record<string, unknown>;
};
export type OnResponseFunction = (
  element: FormElementInstance,
  currentValue: AnyValidJSObject
) => void;
export type OnAttributeSaveFunction = (
  key: string,
  attributes: Record<string, unknown>
) => void;
export type FormElement = {
  type: ElementType;
  construct: (id: string) => FormElementInstance;
  designerButton: FormDesignerButtonType;
  DesignerComponent: React.FC<{
    formElement: FormElementInstance;
  }>;
  ResponseComponent: React.FC<{
    formElement: FormElementInstance;
    onResponse?: OnResponseFunction;
    isValid?: boolean;
  }>;
  PropertiesComponent: React.FC<{
    formElement: FormElementInstance;
    onAttributeSave: OnAttributeSaveFunction;
  }>;
  validate: ValidateFunction;
};

export type FormElementTypes = {
  [key in ElementType]: FormElement;
};
