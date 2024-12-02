import React from "react";
import { FormElementInstance } from "../types";
import { Attributes } from "./attributes";

export type DesignerProps = {
  formElement: FormElementInstance;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Designer({ formElement }: DesignerProps) {
  const element = formElement as Custom;
  const { text, level, alignment } = element.attributes;

  const HeaderTag = level as keyof JSX.IntrinsicElements;

  return (
    <div className="w-full flex flex-col gap-2">
      <HeaderTag
        className={`text-${alignment} font-bold`}
        style={{ margin: 0 }}
      >
        {text}
      </HeaderTag>
    </div>
  );
}
