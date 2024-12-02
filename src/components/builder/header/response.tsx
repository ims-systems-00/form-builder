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

  const HeaderTag = level as keyof JSX.IntrinsicElements;

  return (
    <HeaderTag
      className={`text-${alignment} font-bold`}
      style={{ margin: "0.5em 0" }}
    >
      {text}
    </HeaderTag>
  );
}
