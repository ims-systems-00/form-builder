import React from "react";
import { Button, FormGroup, Label, Input } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LiaSaveSolid } from "react-icons/lia";

type PropertiesProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};
export function Properties({ formElement, onAttributeSave }: PropertiesProps) {
  const element = formElement as Custom;
  const { label, required } = element.attributes;

  const [localLabel, setLocalLabel] = React.useState(label);
  const [localRequired, setLocalRequired] = React.useState(required);
  const saveProperties = () => {
    if (onAttributeSave) {
      onAttributeSave(formElement.id, {
        label: localLabel,
        required: localRequired,
      });
    }
  };

  return (
    <React.Fragment>
      <h5>
        {" "}
        <IoCalendarNumberOutline size={30} /> Date Input Element{" "}
      </h5>
      <p className="pb-4">
        Select the associated setting to customize this element.
      </p>
      <FormGroup>
        <Label>Question Text</Label>
        <Input
          type="text"
          value={localLabel}
          onChange={(e) => setLocalLabel(e.target.value)}
        />
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
      <Button color="success" onClick={saveProperties} block>
        Save Changes <LiaSaveSolid />
      </Button>
    </React.Fragment>
  );
}
