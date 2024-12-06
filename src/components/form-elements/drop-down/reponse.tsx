import React from "react";
import { FormGroup, Label, Select } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnResponseFunction } from "../types";
import { Attributes } from "./attributes";

export type ResponseProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Response({ formElement, onResponse }: ResponseProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;
  const { questionText, options, required } = attributes;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onResponse) {
      onResponse(formElement.id, event.target.value);
    }
  };

  return (
    <FormGroup>
      {questionText && (
        <Label>
          {questionText} {required && <span className="text-danger">•</span>}
        </Label>
      )}
      <Select
        variant="filled"
        options={options.map((i) => ({
          value: i,
          label: i,
        }))}
        onChange={handleChange}
      />
    </FormGroup>
  );
}
