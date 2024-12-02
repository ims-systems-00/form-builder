import React from "react";
import { FormGroup, Input, FormText, Row, Col } from "reactstrap";
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

  return (
    <FormGroup>
      <h4>Full Name</h4>
      <Row>
        <Col md={6} className="p-3">
          <FormText>
            {attributes.firstNameLabel} {attributes.required && "*"}
          </FormText>
          <Input
            type="text"
            disabled
            placeholder={attributes.firstNamePlaceholder}
            defaultValue={attributes.defaultFirstNameValue}
          />
        </Col>
        <Col md={6} className="p-3">
          <FormText>
            {attributes.lastNameLabel} {attributes.required && "*"}
          </FormText>
          <Input
            type="text"
            disabled
            placeholder={attributes.lastNamePlaceholder}
            defaultValue={attributes.defaultLastNameValue}
          />
        </Col>
      </Row>
      {attributes.subLabel && (
        <FormText>
          <small>{attributes.subLabel}</small>
        </FormText>
      )}
    </FormGroup>
  );
}
