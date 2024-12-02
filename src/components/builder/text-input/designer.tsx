import { FormGroup, Input, FormText } from "@ims-systems-00/ims-ui-kit";
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
      <h5>Text Input</h5>
      <FormText>
        {attributes.label}{" "}
        {attributes.required && <span className="text-danger">*</span>}
      </FormText>
      <Input
        type="text"
        disabled
        placeholder={attributes.placeholder}
        defaultValue={attributes.defaultValue}
      />
      <FormText>
        <small>{attributes.subLabel}</small>
      </FormText>
    </FormGroup>
  );
}
