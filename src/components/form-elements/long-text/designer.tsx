import { FormGroup, Input, Label } from "@ims-systems-00/ims-ui-kit";
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
      <h5>Long Text</h5>
      <p className="pb-4">
        Use this element whenever you are asking someone to describe something
      </p>
      <Label>
        {attributes.label} {attributes.required && "*"}
      </Label>
      <Input
        type="textarea"
        rows={4}
        disabled
        placeholder={attributes.placeholder}
        defaultValue={attributes.defaultValue}
      />
      <Label>
        <small>{attributes.subLabel}</small>
      </Label>
    </FormGroup>
  );
}
