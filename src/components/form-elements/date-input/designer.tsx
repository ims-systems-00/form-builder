import { FormGroup, InputDate, Label } from "@ims-systems-00/ims-ui-kit";
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
  const { label, required } = element.attributes;

  return (
    <FormGroup>
      <Label className="mb-3">
        {label}
        {required && <span className="text-danger">*</span>}
      </Label>
      <InputDate
        // variant="filled"
        inputProps={{ placeholder: "DD/MM/YYYY", disabled: true }}
      />
    </FormGroup>
  );
}
