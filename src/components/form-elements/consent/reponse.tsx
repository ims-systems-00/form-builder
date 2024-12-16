
import { Alert, FormGroup, Input, Label } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnResponseFunction } from "../types";
import { Attributes } from "./attributes";
import { LuAlertTriangle } from "react-icons/lu";
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
      <Alert
        color={attributes.colorScheme.value}
        className={`border border-${attributes.colorScheme.value}`}
      >
        <LuAlertTriangle size={20} className="me-1" />
        {attributes.disclaimer}

        <FormGroup check className="mt-3">
          <Input
            type="checkbox"
            onChange={(e) => {
              if (typeof onResponse === "function") {
                onResponse(formElement.id, e.currentTarget.checked.toString());
              }
            }}
          />
          <Label check>
            {attributes.consent}{" "}
            {attributes.required && <span className="text-danger">*</span>}
          </Label>
        </FormGroup>
      </Alert>
    </FormGroup>
  );
}
