import React from "react";
import { FormGroup, Input, Label, Row, Col } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnResponseFunction } from "../types";
import { Attributes } from "./attributes";

export type ResponseProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
  isValid?: boolean;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Response({ formElement, onResponse, isValid }: ResponseProps) {
  const element = formElement as Custom;
  const { questionText, options, layout, required } = element.attributes;

  const colSize = layout === "half" ? 6 : 12;

  const handleChange = (value: string) => {
    if (typeof onResponse === "function") {
      onResponse(formElement.id, value);
    }
  };

  return (
    <FormGroup>
      <Label>{questionText}</Label>
      <Row>
        {options.map((option, index) => (
          <Col key={index} xs={colSize} className="mb-2">
            <Input
              type="radio"
              id={`radio_${formElement.id}_${index}`}
              name={formElement.id}
              onChange={() => handleChange(option)}
              invalid={isValid === false && required}
            />
            <Label for={`radio_${formElement.id}_${index}`}>{option}</Label>
          </Col>
        ))}
      </Row>
    </FormGroup>
  );
}
