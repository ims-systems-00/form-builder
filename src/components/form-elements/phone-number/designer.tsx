import { FormGroup, FormText, Input, Label } from "@ims-systems-00/ims-ui-kit";
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
  return (
    <FormGroup>
      <h5>Phone Number</h5>
      <p className="pb-4">Use this element for phone number.</p>
      <Label>
        {attributes.label}{" "}
        {attributes.required && <span className="text-danger">*</span>}
      </Label>
      <Input type="text" disabled placeholder={attributes.placeholder} />
      <FormText>{attributes.subLabel}</FormText>
    </FormGroup>
  );
}
