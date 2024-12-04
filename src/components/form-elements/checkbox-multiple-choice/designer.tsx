import React from "react";
import { Row, Col, FormGroup, Label, Input } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance } from "../types";

export type DesignerProps = {
  formElement: FormElementInstance;
};

export function Designer({ formElement }: DesignerProps) {
  const { attributes } = formElement;
  const { questionText, options, layout, required } = attributes;

  return (
    <FormGroup>
      <Label className="mb-3">
        {questionText} {required && "*"}
      </Label>
      <Row>
        {options.map((option, index) => (
          <Col
            xs={layout === "half" ? 6 : 12}
            key={index}
            className="mb-2 d-flex align-items-center"
          >
            <Input type="checkbox" className="mr-2" />
            <Label className="mb-0">{option}</Label>
          </Col>
        ))}
      </Row>
    </FormGroup>
  );
}
