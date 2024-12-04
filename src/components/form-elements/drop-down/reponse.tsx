import React from "react";
import { FormGroup, Label, Input } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnResponseFunction } from "../types";

export type ResponseProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
};

export function Response({ formElement, onResponse }: ResponseProps) {
  const { attributes } = formElement;
  const { questionText, options, required } = attributes;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onResponse) {
      onResponse(formElement.id, event.target.value);
    }
  };

  return (
    <FormGroup>
      <Label className="mb-2">
        {questionText} {required && "*"}
      </Label>
      <Input type="select" onChange={handleChange}>
        <option value="">Please Select</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Input>
    </FormGroup>
  );
}
