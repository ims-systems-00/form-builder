import React from "react";
import { FormElementInstance } from "../types";
import { Attributes } from "./attributes";

export type ResponseProps = {
  formElement: FormElementInstance;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Response({ formElement }: ResponseProps) {
  const element = formElement as Custom;
  const { text, level, alignment } = element.attributes;

  const HeaderTag = level.value as keyof JSX.IntrinsicElements;

  return (
    <HeaderTag className={`text-${alignment.value} font-bold mb-4`}>
      {text}
    </HeaderTag>
  );
}
