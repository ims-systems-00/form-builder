import React from "react";
import { FormGroup, Label, Input, Row, Col } from "@ims-systems-00/ims-ui-kit";
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
  const { questionText, options, layout } = element.attributes;

  const colSize = layout === "half" ? 6 : 12;

  return (
    <FormGroup>
      <Label>{questionText}</Label>
      <Row>
        {options.map((option, index) => (
          <Col key={index} xs={colSize} className="mb-2">
            <Input
              type="radio"
              id={`radio_${formElement.id}_${index}`}
              disabled
            />
            <Label for={`radio_${formElement.id}_${index}`}>{option}</Label>
          </Col>
        ))}
      </Row>
    </FormGroup>
  );
}
