import React from "react";
import {
  FormGroup,
  Label,
  Input,
  ListGroup,
  ListGroupItem,
} from "@ims-systems-00/ims-ui-kit";

export type DesignerProps = {
  formElement: FormElementInstance;
};

export function Designer({ formElement }: DesignerProps) {
  const { attributes } = formElement;
  const { questionText, options } = attributes;

  return (
    <div className="dropdown-designer">
      <FormGroup>
        {/* Display question text */}
        <Label>
          <strong>{questionText}</strong>
        </Label>

        {/* Dropdown */}
        <Input type="select" className="mb-3">
          <option>Please Select</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Input>

        {/* List of Options */}
        <Label>
          <strong>Options:</strong>
        </Label>
        <ListGroup>
          {options.map((option, index) => (
            <ListGroupItem key={index}>{option}</ListGroupItem>
          ))}
        </ListGroup>
      </FormGroup>
    </div>
  );
}
