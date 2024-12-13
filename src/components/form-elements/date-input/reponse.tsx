import { FormGroup, InputDate, Label } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnResponseFunction } from "../types";
import { Attributes } from "./attributes";

export type ResponseProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Response({ formElement }: ResponseProps) {
  const element = formElement as Custom;
  const { label, required } = element.attributes;

  // const handleChange = (e: { date: string; label: string }) => {
  //   if (onResponse) {
  //     onResponse(formElement.id, e.date);
  //   }
  // };

  return (
    <FormGroup>
      <Label>
        {label} {required && <span className="text-danger">*</span>}
      </Label>
      <InputDate
        // variant="filled"
        inputProps={{
          placeholder: "DD/MM/YYYY",
        }}
        dateFormat={"DD/MM/YYYY"}
        closeOnSelect
        // onChange={handleChange}
      />
    </FormGroup>
  );
}
