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
        <Label>Lebel</Label>
        <Input defaultValue={attributes.label} />
        <Label>This text will be displayed at the top of the input field</Label>
      </FormGroup>
      <FormGroup>
        <Label>Placeholder</Label>
        <Input defaultValue={attributes.placeholder} />
        <Label>This text will be displayed as a hint in the input field</Label>
      </FormGroup>
      <FormGroup>
        <Label>Sub lebel</Label>
        <Input defaultValue={attributes.subLabel} />
        <Label>
          This text will be displayed at the bottom of the input field
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
