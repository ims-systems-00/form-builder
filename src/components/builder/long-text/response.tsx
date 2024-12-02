import { FormGroup, Input, FormText } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnResponseFunction } from "../types";
import { Attributes } from "./attributes";
export type DesignerProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};
export function Response({ formElement, onResponse }: DesignerProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;
  return (
    <FormGroup>
      <FormText>
        {attributes.label} {attributes.required && "*"}
      </FormText>
      <Input
        type="textarea"
        rows={4}
        placeholder={attributes.placeholder}
        defaultValue={attributes.defaultValue}
        onChange={(e) => {
          if (typeof onResponse === "function")
            onResponse(formElement.id, e.currentTarget.value);
        }}
      />
      <FormText>
        <small>{attributes.subLabel}</small>
      </FormText>
    </FormGroup>
  );
}
