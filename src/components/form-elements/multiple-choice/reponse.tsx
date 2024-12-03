import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { FormElementInstance, OnResponseFunction } from "../types";
import { Attributes } from "./attributes";

export type ResponseProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
  isValid?: boolean;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Response({ formElement, onResponse }: ResponseProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onResponse) {
      onResponse(
        formElement.id,
        JSON.stringify({ selectedOption: e.target.value })
      );
    }
  };

  return (
    <FormGroup>
      <Label>{attributes.questionText}</Label>
      {attributes.options.map((option, index) => (
        <FormGroup check key={index}>
          <Label check>
            <Input
              type="radio"
              name={`option_${formElement.id}`}
              value={option}
              onChange={handleOptionChange}
            />
            {option}
          </Label>
        </FormGroup>
      ))}
    </FormGroup>
  );
}
