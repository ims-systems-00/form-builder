import React from "react";
import { Button, FormGroup, Label, Input } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";

type PropertiesProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};
export function Properties({ formElement, onAttributeSave }: PropertiesProps) {
  const element = formElement as Custom;
  const { label } = element.attributes;

  const [localLabel, setLocalLabel] = React.useState(label);

  const saveProperties = () => {
    if (onAttributeSave) {
      onAttributeSave(formElement.id, {
        questionText: localLabel,
      });
    }
  };

  return (
    <React.Fragment>
      <FormGroup>
        <Label>Question Text</Label>
        <Input
          type="text"
          value={localLabel}
          onChange={(e) => setLocalLabel(e.target.value)}
        />
      </FormGroup>

      <Button color="success" onClick={saveProperties}>
        Save
      </Button>
    </React.Fragment>
  );
}
