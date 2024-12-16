import { FormGroup, Input, Alert, Label } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance } from "../types";
import { Attributes } from "./attributes";
import { LuAlertTriangle } from "react-icons/lu";
import React from "react";
export type DesignerProps = {
  formElement: FormElementInstance;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};
export function Designer({ formElement }: DesignerProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;

  return (
    <FormGroup>
      <h5>Concern</h5>
      <p className="pb-4">Use this element for consent </p>

      <Alert
        color={attributes.colorScheme.value}
        className={`border border-${attributes.colorScheme.value}`}
      >
        <LuAlertTriangle size={20} className="me-1" />
        {attributes.disclaimer}

        <FormGroup check className="mt-3">
          <Input type="checkbox" />
          <Label check>
            {attributes.consent}{" "}
            {attributes.required && <span className="text-danger">*</span>}
          </Label>
        </FormGroup>
      </Alert>
    </FormGroup>
  );
}
