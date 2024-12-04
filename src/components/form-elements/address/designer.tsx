import React from "react";
import { FormGroup, Input, Label, Row, Col } from "@ims-systems-00/ims-ui-kit";
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
      <h5>Address</h5>
      <p className="pb-4">Use this element for capturing address.</p>
      <FormGroup>
        <Input
          type="text"
          placeholder={attributes.streetAddressPlaceholder}
          disabled
        />
        <Label className="mt-2">{attributes.streetAddressLabel}</Label>
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          placeholder={attributes.streetAddressLine2Placeholder}
          disabled
        />
        <Label className="mt-2">{attributes.streetAddressLine2Label}</Label>
      </FormGroup>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Input
              type="text"
              placeholder={attributes.cityPlaceholder}
              disabled
            />
            <Label className="mt-2">{attributes.cityLabel}</Label>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input
              type="text"
              placeholder={attributes.statePlaceholder}
              disabled
            />
            <Label className="mt-2">{attributes.stateLabel}</Label>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Input
          type="text"
          placeholder={attributes.postalCodePlaceholder}
          disabled
        />
        <Label className="mt-2">{attributes.postalCodeLabel}</Label>
      </FormGroup>
    </React.Fragment>
  );
}
