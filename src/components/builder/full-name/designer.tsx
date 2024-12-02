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
      <h4>Full Name</h4>
      <div className="d-flex">
        <div className="mr-2 flex-grow-1 p-3">
          <Label>
            {attributes.firstNameLabel} {attributes.required && "*"}
          </Label>
          <Input
            type="text"
            disabled
            placeholder={attributes.firstNamePlaceholder}
            defaultValue={attributes.defaultFirstNameValue}
          />
        </div>
        <div className="flex-grow-1 p-3">
          <Label>
            {attributes.lastNameLabel} {attributes.required && "*"}
          </Label>
          <Input
            type="text"
            disabled
            placeholder={attributes.lastNamePlaceholder}
            defaultValue={attributes.defaultLastNameValue}
          />
        </div>
      </div>

      <Label>
        <small>{attributes.subLabel}</small>
      </Label>
    </FormGroup>
  );
}
