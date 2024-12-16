import { FormElementInstance } from "../types";
import { Attributes } from "./attributes";
import React from "react";

export type ResponseProps = {
  formElement: FormElementInstance;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Response({ formElement }: ResponseProps) {
  const element = formElement as Custom;
  const { text, headerSize, headerAlignment, required } = element.attributes;

  const HeaderTag = headerSize as keyof JSX.IntrinsicElements;

  return (
    <HeaderTag className={`text-${headerAlignment} font-bold mb-4`}>
      {text} {required && <span className="text-danger">*</span>}
    </HeaderTag>
  );
}
