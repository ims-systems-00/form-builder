import {
  FormGroup,
  Label,
  Alert,
  UncontrolledAlert,
} from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance } from "../types";
import { Attributes } from "./attributes";

export type DesignerProps = {
  formElement: FormElementInstance;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};
export function Designer({ formElement }: DesignerProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;
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
