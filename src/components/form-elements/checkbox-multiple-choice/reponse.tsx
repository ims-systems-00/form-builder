import React from "react";
import { FormGroup, Label, Input } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnResponseFunction } from "../types";
import { Attributes } from "./attributes";
export type ResponseProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
};
type Custom = FormElementInstance & {
  attributes: Attributes;
};
export function Response({ formElement, onResponse }: ResponseProps) {
  const element = formElement as Custom;
  const { questionText, options, required } = element.attributes;

  const handleChange = (option: string) => {
    if (typeof onResponse === "function") {
      onResponse(formElement.id, option);
    }
  };

  return (
    <FormGroup>
      <Label className="mb-3">
        {questionText} {required && "*"}
      </Label>

      {options.map((option) => (
        // <Col
        //   xs={layout === "half" ? 6 : 12}
        //   key={index}
        //   className="mb-2 d-flex align-items-center"
        // >
        <FormGroup check>
          <Input
            type="checkbox"
            onChange={() => handleChange(option)}
            className="mr-2"
          />
          <Label className="mb-0">{option}</Label>
        </FormGroup>
        // </Col>
      ))}
    </FormGroup>
  );
}
