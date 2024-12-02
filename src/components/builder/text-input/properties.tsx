import { Button, FormGroup, FormText, Input } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";
import React from "react";

export type DesignerProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

type TextElementInstance = FormElementInstance & {
  attributes: Attributes;
};
export function Properties({ formElement, onAttributeSave }: DesignerProps) {
  const element = formElement as TextElementInstance;
  const attributes = element.attributes;
  return (
    <React.Fragment>
      <FormGroup>
        <FormText>Lebel</FormText>
        <Input defaultValue={attributes.label} />
        <FormText>
          This text will be displayed at the top of the input field
        </FormText>
      </FormGroup>
      <FormGroup>
        <FormText>Placeholder</FormText>
        <Input defaultValue={attributes.placeholder} />
        <FormText>
          This text will be displayed as a hint in the input field
        </FormText>
      </FormGroup>
      <FormGroup>
        <FormText>Sub lebel</FormText>
        <Input defaultValue={attributes.subLabel} />
        <FormText>
          This text will be displayed at the bottom of the input field
        </FormText>
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
