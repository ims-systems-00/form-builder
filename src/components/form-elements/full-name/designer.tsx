import React from "react";
import { FormGroup, Input, Label, Row, Col, FormText } from "reactstrap";
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
    <React.Fragment>
      <h5>Full Name</h5>
      <p className="pb-4">
        Use this element for capturing peoples name.
      </p>
      <Row>
        <Col md={6} className="p-3">
          <FormGroup>
            <Label>
              {attributes.firstNameLabel} {attributes.required && "*"}
            </Label>
            <Input
              type="text"
              disabled
              placeholder={attributes.firstNamePlaceholder}
              defaultValue={attributes.defaultFirstNameValue}
            />
          </FormGroup>
        </Col>
        <Col md={6} className="p-3">
          <FormGroup>
            <Label>
              {attributes.lastNameLabel} {attributes.required && "*"}
            </Label>
            <Input
              type="text"
              disabled
              placeholder={attributes.lastNamePlaceholder}
              defaultValue={attributes.defaultLastNameValue}
            />
          </FormGroup>
        </Col>
      </Row>
      {attributes.subLabel && (
        <FormText>
          <small>{attributes.subLabel}</small>
        </FormText>
      )}
    </React.Fragment>
  );
}
