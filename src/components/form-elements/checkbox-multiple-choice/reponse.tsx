import React from "react";
import { FormGroup, Label, Row, Col, Input } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnResponseFunction } from "../types";

export type ResponseProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
};

export function Response({ formElement, onResponse }: ResponseProps) {
  const { attributes } = formElement;
  const { questionText, options, layout, required } = attributes;

  const handleChange = (option: string) => {
    if (onResponse) {
      onResponse(formElement.id, option);
    }
  };

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
