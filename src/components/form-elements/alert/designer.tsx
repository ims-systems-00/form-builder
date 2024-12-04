import React from "react";
import {
  FormGroup,
  Label,
  Alert,
  Button,
  UncontrolledAlert,
} from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance } from "../types";

export type DesignerProps = {
  formElement: FormElementInstance;
};

export function Designer({ formElement }: DesignerProps) {
  const { attributes } = formElement;
  const { message, alertType, dismissible } = attributes;

  return (
    <FormGroup>
      <Label>
        <strong>Alert Preview</strong>
      </Label>

      {!dismissible && (
        <Alert color={alertType} fade>
          {message}
        </Alert>
      )}

      {dismissible && (
        <UncontrolledAlert color={alertType}>{message}</UncontrolledAlert>
      )}
    </FormGroup>
  );
}
