import React from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";
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
  const { questionText, options, layout, inputType } = element.attributes;

  const isHalfScreen = layout === "half";

  return (
    <FormGroup>
      <h5>Multiple Choice</h5>
      <p className="pb-4">Use this element for multiple choice.</p>

      <Label>{questionText}</Label>
      <Row>
        {options.map((option, index) => (
          <Col key={index} xs={isHalfScreen ? "6" : "12"}>
            <FormGroup check>
              <Label check>
                <Input
                  type={inputType}
                  name={`input_${formElement.id}`}
                  disabled
                />
                {option}
              </Label>
            </FormGroup>
          </Col>
        ))}
      </Row>
    </FormGroup>
  );
}
