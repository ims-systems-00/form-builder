import React from "react";
import {
  FormGroup,
  Label,
  Select,
  ListGroup,
  ListGroupItem,
} from "@ims-systems-00/ims-ui-kit";
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
  const { questionText, options, required } = attributes;

  return (
    <FormGroup>
      <Label className="mb-3">
        {questionText}
        {required && <span className="text-danger">*</span>}
      </Label>

      {/* Non-clickable dropdown */}
      <Select variant="filled" isDisabled={true}></Select>

      {/* List of Options */}
      <Label className="mt-3">
        <strong>Options:</strong>
      </Label>
      <ListGroup>
        {options.map((option, index) => (
          <ListGroupItem key={index}>{option}</ListGroupItem>
        ))}
      </ListGroup>
    </FormGroup>
  );
}
