import React from "react";
import { FormGroup, Label, Input, Button } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";

export type PropertiesProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

export function Properties({ formElement, onAttributeSave }: PropertiesProps) {
  const { attributes } = formElement;
  const { message, alertType, dismissible } = attributes;

  const [localMessage, setLocalMessage] = React.useState(message);
  const [localAlertType, setLocalAlertType] = React.useState(alertType);
  const [localDismissible, setLocalDismissible] = React.useState(dismissible);

  const saveProperties = () => {
    if (onAttributeSave) {
      onAttributeSave(formElement.id, {
        message: localMessage,
        alertType: localAlertType,
        dismissible: localDismissible,
      });
    }
  };

  return (
    <>
      <FormGroup>
        <Label>Alert Message</Label>
        <Input
          type="text"
          value={localMessage}
          onChange={(e) => setLocalMessage(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Alert Type</Label>
        <Input
          type="select"
          value={localAlertType}
          onChange={(e) =>
            setLocalAlertType(e.target.value as Attributes["alertType"])
          }
        >
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="danger">Danger</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label>
          <Input
            type="checkbox"
            checked={localDismissible}
            onChange={(e) => setLocalDismissible(e.target.checked)}
          />
          Dismissible
        </Label>
      </FormGroup>

      <Button color="success" onClick={saveProperties}>
        Save
      </Button>
    </>
  );
}
