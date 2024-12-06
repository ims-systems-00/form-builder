import { Button, FormGroup, Label, Input } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";
import React, { useState } from "react";
import { LiaSaveSolid } from "react-icons/lia";
import { LuPhone } from "react-icons/lu";
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
  const [localRequired, setLocalRequired] = useState(attributes.required);
  return (
    <React.Fragment>
      <h5>
        {" "}
        <LuPhone size={30} /> Phone Number Element{" "}
      </h5>
      <p className="pb-4">
        Select the associated setting to customize this element.
      </p>

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

      <Label>
        Toggle this switch to mark the field as 'Required' or 'Optional,'
        ensuring flexibility in your form's input rules.
      </Label>
      <FormGroup switch className="pull-right">
        <Input
          type="switch"
          checked={localRequired}
          onChange={(e) => setLocalRequired(e.target.checked)}
        />
        <Label>Required</Label>
      </FormGroup>

      <Button
        block
        color="primary"
        onClick={() => {
          if (typeof onAttributeSave === "function")
            onAttributeSave(formElement.id, { key: "value" });
        }}
      >
        Save Changes <LiaSaveSolid />
      </Button>
    </React.Fragment>
  );
}
