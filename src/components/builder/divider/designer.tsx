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
  const { paddingTop, paddingBottom, color } = element.attributes;

  return (
    <div className={`w-100 ${paddingTop} ${paddingBottom}`}>
      <hr className="border-1" style={{ borderColor: color }} />
    </div>
  );
}
