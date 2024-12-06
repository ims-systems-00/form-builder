import React from "react";

export type ElementType =
  | "TextInput"
  | "LongText"
  | "FullName"
  | "Header"
  | "Divider"
  | "Email"
  | "Address"
  | "PhoneNumber"
  | "RadioSingleChoice"
  | "CheckBoxMultipleChoice"
  | "DropDown"
  | "Alert"
  | "DateInput"
  | "Location"
  | "Consent"
  | "RichContent";

export type ValidateFunction = (
  formElement: FormElementInstance,
  currectValue: string
) => boolean;

export type OnResponseFunction = (key: string, currectValue: string) => void;
export type OnAttributeSaveFunction = (
  key: string,
  attributes: Record<string, unknown>
) => void;
export type FormDesignerButtonType = {
  icon: React.FC<{ size?: number }>;
  text: string;
};
export type FormElement = {
  type: ElementType;
  construct: (id: string) => FormElementInstance;
  designerButtton: FormDesignerButtonType;
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
export type FormElementInstance = {
  id: string;
  type: ElementType;
  attributes: Record<string, unknown>;
};
export type FormElementTypes = {
  [key in ElementType]: FormElement;
};
