import React from "react";

export type ElementType =
  | "TextInput"
  | "Heading"
  | "Paragraph"
  | "Spacer"
  | "Select"
  | "DatePicker"
  | "TextArea"
  | "LongText"
  | "FullName"
  | "NumberInput";
export type ValidateFunction = (
  formElement: FormElementInstance,
  currectValue: string
) => boolean;

export type OnResponseFunction = (key: string, currectValue: string) => void;
export type OnAttributeSaveFunction = (
  key: string,
  attributes: Record<string, unknown>
) => void;

export type FormElement = {
  type: ElementType;
  construct: (id: string) => FormElementInstance;
  designerButtton: {
    icon: React.ReactNode;
    text: string;
  };
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
