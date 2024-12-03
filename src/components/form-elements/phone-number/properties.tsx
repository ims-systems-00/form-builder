import { Button, FormGroup, Label, Input } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";
import React from "react";

export type DesignerProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

type ThisElementInstance = FormElementInstance & {
  attributes: Attributes;
};
export function Properties({ formElement, onAttributeSave }: DesignerProps) {
  const element = formElement as ThisElementInstance;
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
        block
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
