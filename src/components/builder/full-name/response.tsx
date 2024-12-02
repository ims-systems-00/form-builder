import React from "react";
import { FormGroup, Input, FormText, Row, Col } from "reactstrap";
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
  const attributes = element.attributes;

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onResponse === "function") {
      onResponse(formElement.id, JSON.stringify({ firstName: e.target.value }));
    }
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onResponse === "function") {
      onResponse(formElement.id, JSON.stringify({ lastName: e.target.value }));
    }
  };

  return (
    <FormGroup>
      <Row>
        <Col md={6}>
          <FormText>
            {attributes.firstNameLabel} {attributes.required && "*"}
          </FormText>
          <Input
            placeholder={attributes.firstNamePlaceholder}
            defaultValue={attributes.defaultFirstNameValue}
            onChange={handleFirstNameChange}
            invalid={isValid === false}
          />
        </Col>
        <Col md={6}>
          <FormText>
            {attributes.lastNameLabel} {attributes.required && "*"}
          </FormText>
          <Input
            placeholder={attributes.lastNamePlaceholder}
            defaultValue={attributes.defaultLastNameValue}
            onChange={handleLastNameChange}
            invalid={isValid === false}
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
