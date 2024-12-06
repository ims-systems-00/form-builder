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
  const { paddingTop, paddingBottom, color, lineWidth } = element.attributes;

  return (
    <div
      className="w-100"
      style={{
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
      }}
    >
      <hr
        className=""
        style={{
          borderColor: color,
          borderWidth: `${lineWidth}px`, // Line width
        }}
        aria-hidden="true"
      />
    </div>
  );
}
