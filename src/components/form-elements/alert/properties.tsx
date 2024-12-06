import { Button, FormGroup, Input, Label } from "@ims-systems-00/ims-ui-kit";
import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { LiaSaveSolid } from "react-icons/lia";
import { ColorVarientPicker } from "../../color-varient-picker";
import { Varients } from "../../color-varient-picker/type";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";

export type PropertiesProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes & {};
};
export function Properties({ formElement, onAttributeSave }: PropertiesProps) {
  const element = formElement as Custom;

  const { message, alertType, dismissible } = element.attributes;

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
      <h5>
        {" "}
        <FiAlertCircle size={30} /> Alert Element{" "}
      </h5>
      <p className="pb-4">
        Select the associated setting to customize this element.
      </p>
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

        <ColorVarientPicker
          varient={alertType as Varients}
          onVarientChange={(varient) => {
            setLocalAlertType(varient);
          }}
        />

        {/* <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {alertTypeColors.map((item) => (
            <div
              key={item.type}
              onClick={() => setLocalAlertType(item.type)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                border:
                  localAlertType === item.type
                    ? "3px solid black"
                    : "1px solid #ccc",
                backgroundColor: item.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                color: item.type === "light" ? "#000" : "#fff",
              }}
            >
              {localAlertType === item.type ? "✔" : ""}
            </div>
          ))}
        </div> */}
      </FormGroup>

      <Label>
        Enabling this option will allow users to dismiss the alert after it
        appears.Useful for temporary notifications.
      </Label>
      <FormGroup switch className="pull-right mt-2 mb-3">
        <Input
          type="switch"
          checked={localDismissible}
          onChange={(e) => setLocalDismissible(e.target.checked)}
        />
        <Label>Dismissible</Label>
      </FormGroup>

      <Button color="success" onClick={saveProperties} block>
        Save Changes <LiaSaveSolid />
      </Button>
    </>
  );
}
