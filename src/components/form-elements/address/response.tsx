import React from "react";
import { Row, Col, FormGroup, Input, Label } from "reactstrap";
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

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof onResponse === "function") {
        onResponse(formElement.id, JSON.stringify({ [field]: e.target.value }));
      }
    };

  return (
    <div>
      <h5>Address</h5>
      <FormGroup>
        <Input
          placeholder={attributes.streetAddressPlaceholder}
          onChange={handleChange("streetAddress")}
          invalid={isValid === false}
        />
        <Label className="mt-2">{attributes.streetAddressLabel}</Label>
      </FormGroup>

      <FormGroup>
        <Input
          placeholder={attributes.streetAddressLine2Placeholder}
          onChange={handleChange("streetAddressLine2")}
          invalid={isValid === false}
        />
        <Label className="mt-2">{attributes.streetAddressLine2Label}</Label>
      </FormGroup>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Input
              placeholder={attributes.cityPlaceholder}
              onChange={handleChange("city")}
              invalid={isValid === false}
            />
            <Label className="mt-2">{attributes.cityLabel}</Label>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input
              placeholder={attributes.statePlaceholder}
              onChange={handleChange("state")}
              invalid={isValid === false}
            />
            <Label className="mt-2">{attributes.stateLabel}</Label>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Input
          placeholder={attributes.postalCodePlaceholder}
          onChange={handleChange("postalCode")}
          invalid={isValid === false}
        />
        <Label className="mt-2">{attributes.postalCodeLabel}</Label>
      </FormGroup>
    </div>
  );
}
