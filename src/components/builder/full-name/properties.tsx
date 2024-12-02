import { Button, FormGroup, Input, Label } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";
import React from "react";

export type DesignerProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Properties({ formElement, onAttributeSave }: DesignerProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;
  return (
    <React.Fragment>
      <FormGroup>
        <FormText>First Name Label</FormText>
        <Input defaultValue={attributes.firstNameLabel} />
        <FormText>
          This text will be displayed above the first name field
        </FormText>
      </FormGroup>
      <FormGroup>
        <FormText>First Name Placeholder</FormText>
        <Input defaultValue={attributes.firstNamePlaceholder} />
        <FormText>
          This text will be displayed as a hint in the first name field
        </FormText>
      </FormGroup>
      <FormGroup>
        <FormText>Last Name Label</FormText>
        <Input defaultValue={attributes.lastNameLabel} />
        <FormText>
          This text will be displayed above the last name field
        </FormText>
      </FormGroup>
      <FormGroup>
        <FormText>Last Name Placeholder</FormText>
        <Input defaultValue={attributes.lastNamePlaceholder} />
        <FormText>
          This text will be displayed as a hint in the last name field
        </FormText>
      </FormGroup>
      <FormGroup>
        <FormText>Sub label</FormText>
        <Input defaultValue={attributes.subLabel} />
        <FormText>
          This text will be displayed at the bottom of the input fields
        </FormText>
      </FormGroup>
      <Button
        onClick={() => {
          if (typeof onAttributeSave === "function")
            onAttributeSave(formElement.id, { key: "value" });
        }}
      >
        Save
      </Button>
    </React.Fragment>
  );
}
