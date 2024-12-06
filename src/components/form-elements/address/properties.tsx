import React from "react";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";
import { FaRegAddressBook } from "react-icons/fa";
import { LiaSaveSolid } from "react-icons/lia";

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
      <h5>
        {" "}
        <FaRegAddressBook size={30} /> Address Element{" "}
      </h5>
      <p className="pb-4">
        Select the associated setting to customize this element.
      </p>
      <Label className="mb-4">
        <strong>Street Address properties</strong>
      </Label>
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
      <Label className="mb-4">
        <strong>City properties</strong>
      </Label>
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
      <Label className="mb-4">
        <strong>State properties</strong>
      </Label>
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
      <Label className="mb-4">
        <strong>Postal Code properties</strong>
      </Label>
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
      <Label>
        Toggle this switch to mark the field as 'Required' or 'Optional,'
        ensuring flexibility in your form's input rules.
      </Label>

      <FormGroup switch className="pull-right">
        <Input
          type="switch"
          checked={localAttributes.required}
          onChange={handleCheckboxChange}
        />
        <Label>Required</Label>
      </FormGroup>

      <Button color="primary" onClick={saveProperties} block>
        Save Changes <LiaSaveSolid />
      </Button>
    </div>
  );
}
