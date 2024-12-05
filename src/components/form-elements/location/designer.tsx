import {
  FormGroup,
  Label,
  FormText,
  Select,
  Alert,
} from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance } from "../types";
import { Attributes } from "./attributes";
import { useFormBuilder } from "../../builder/form-builder/useFormBuilder";
export type DesignerProps = {
  formElement: FormElementInstance;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};
export function Designer({ formElement }: DesignerProps) {
  const { isGoogleJsAPILoaded } = useFormBuilder();
  const element = formElement as Custom;
  const attributes = element.attributes;

  if (!isGoogleJsAPILoaded)
    return <Alert color="warning">Google API not loaded</Alert>;

  return (
    <FormGroup>
      <h5>Location</h5>
      <p className="pb-4">
        Use this element for capturing location information from the user.
      </p>
      <Label>
        {attributes.label}{" "}
        {attributes.required && <span className="text-danger">*</span>}
      </Label>

      <Select isDisabled placeholder={attributes.placeholder} />
      <FormText>{attributes.subLabel}</FormText>
    </FormGroup>
  );
}
