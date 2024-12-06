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
  const { questionText, options, required } = element.attributes;

  // const colSize = layout === "half" ? 6 : 12;

  return (
    <FormGroup>
      <Label>
        {questionText} {required && <span className="text-danger">*</span>}
      </Label>

      {options.map((option) => (
        // <Col key={index} xs={colSize} className="mb-2">
        //   <Input
        //     type="radio"
        //     id={`radio_${formElement.id}_${index}`}
        //     disabled
        //   />
        <FormGroup check>
          <Input type="radio" className="mr-2" />
          <Label className="mb-0">{option}</Label>
        </FormGroup>
      ))}
    </FormGroup>
  );
}
