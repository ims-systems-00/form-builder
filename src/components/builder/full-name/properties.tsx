import { Button, FormGroup, Input, Label } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnProperSaveFunction } from "../types";
import { Attributes } from "./attributes";
import React from "react";

export type DesignerProps = {
  formElement: FormElementInstance;
  onPropertiesSave?: OnProperSaveFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Properties({ formElement, onPropertiesSave }: DesignerProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;
  return (
    <React.Fragment>
      <FormGroup>
        <Label>First Name Label</Label>
        <Input defaultValue={attributes.firstNameLabel} />
        <Label>This text will be displayed above the first name field</Label>
      </FormGroup>
      <FormGroup>
        <Label>First Name Placeholder</Label>
        <Input defaultValue={attributes.firstNamePlaceholder} />
        <Label>
          This text will be displayed as a hint in the first name field
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>Last Name Label</Label>
        <Input defaultValue={attributes.lastNameLabel} />
        <Label>This text will be displayed above the last name field</Label>
      </FormGroup>
      <FormGroup>
        <Label>Last Name Placeholder</Label>
        <Input defaultValue={attributes.lastNamePlaceholder} />
        <Label>
          This text will be displayed as a hint in the last name field
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>Sub label</Label>
        <Input defaultValue={attributes.subLabel} />
        <Label>
          This text will be displayed at the bottom of the input fields
        </Label>
      </FormGroup>
      <Button
        onClick={() => {
          if (typeof onPropertiesSave === "function")
            onPropertiesSave(formElement.id, { key: "value" });
        }}
      >
        Save
      </Button>
    </React.Fragment>
  );
}
