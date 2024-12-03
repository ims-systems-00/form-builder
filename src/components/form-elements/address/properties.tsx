import React from "react";
import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";

export type PropertiesProps = {
  formElement: FormElementInstance;
  onAttributeSave: OnAttributeSaveFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Properties({ formElement, onAttributeSave }: PropertiesProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;

  const [localAttributes, setLocalAttributes] = React.useState(attributes);

  const handleInputChange =
    (field: keyof Attributes) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalAttributes({
        ...localAttributes,
        [field]: e.target.value,
      });
    };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalAttributes({
      ...localAttributes,
      required: e.target.checked,
    });
  };

  const saveProperties = () => {
    onAttributeSave(formElement.id, localAttributes);
  };

  return (
    <div>
      <FormGroup>
        <Label>Street Address Placeholder</Label>
        <Input
          value={localAttributes.streetAddressPlaceholder}
          onChange={handleInputChange("streetAddressPlaceholder")}
        />
      </FormGroup>

      <FormGroup>
        <Label>Street Address Label</Label>
        <Input
          value={localAttributes.streetAddressLabel}
          onChange={handleInputChange("streetAddressLabel")}
        />
      </FormGroup>

      <FormGroup>
        <Label>Street Address Line 2 Placeholder</Label>
        <Input
          value={localAttributes.streetAddressLine2Placeholder}
          onChange={handleInputChange("streetAddressLine2Placeholder")}
        />
      </FormGroup>

      <FormGroup>
        <Label>Street Address Line 2 Label</Label>
        <Input
          value={localAttributes.streetAddressLine2Label}
          onChange={handleInputChange("streetAddressLine2Label")}
        />
      </FormGroup>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label>City Placeholder</Label>
            <Input
              value={localAttributes.cityPlaceholder}
              onChange={handleInputChange("cityPlaceholder")}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>City Label</Label>
            <Input
              value={localAttributes.cityLabel}
              onChange={handleInputChange("cityLabel")}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label>State Placeholder</Label>
            <Input
              value={localAttributes.statePlaceholder}
              onChange={handleInputChange("statePlaceholder")}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>State Label</Label>
            <Input
              value={localAttributes.stateLabel}
              onChange={handleInputChange("stateLabel")}
            />
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label>Postal Code Placeholder</Label>
        <Input
          value={localAttributes.postalCodePlaceholder}
          onChange={handleInputChange("postalCodePlaceholder")}
        />
      </FormGroup>

      <FormGroup>
        <Label>Postal Code Label</Label>
        <Input
          value={localAttributes.postalCodeLabel}
          onChange={handleInputChange("postalCodeLabel")}
        />
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            checked={localAttributes.required}
            onChange={handleCheckboxChange}
          />
          Required
        </Label>
      </FormGroup>

      <Button color="primary" onClick={saveProperties}>
        Save
      </Button>
    </div>
  );
}
