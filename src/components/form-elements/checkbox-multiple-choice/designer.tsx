import React from "react";
import { FormGroup, Label, Input } from "@ims-systems-00/ims-ui-kit";
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
  const attributes = element.attributes;
  const { questionText, options, required } = attributes;

  return (
    <FormGroup>
      <Label className="mb-3">
        {questionText} {required && <span className="text-danger">*</span>}
      </Label>
      {options.map((option) => (
        // <Col
        //   xs={layout === "half" ? 6 : 12}
        //   key={index}
        //   className="mb-2 d-flex align-items-center"
        // >
        <FormGroup check>
          <Input type="checkbox" className="mr-2" />
          <Label className="mb-0">{option}</Label>
        </FormGroup>

        // </Col>
      ))}
    </FormGroup>
  );
}
