import { FormGroup, Input, Label } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnResponseFunction } from "../types";
import { Attributes } from "./attributes";
import React from "react";

export type DesignerProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};
export function Response({ formElement, onResponse }: DesignerProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;
  return (
    <FormGroup>
      <Label>
        {attributes.label}{" "}
        {attributes.required && <span className="text-danger">*</span>}
      </Label>
      <Input
        type="text"
        placeholder={attributes.placeholder}
        onChange={(e) => {
          if (typeof onResponse === "function")
            onResponse(formElement.id, e.currentTarget.value);
        }}
      />
      <Label>
        <small>{attributes.subLabel}</small>
      </Label>
    </FormGroup>
  );
}
