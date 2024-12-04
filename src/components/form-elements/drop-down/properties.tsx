import React from "react";
import {
  Button,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";

type PropertiesProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

export function Properties({ formElement, onAttributeSave }: PropertiesProps) {
  const element = formElement as FormElementInstance & {
    attributes: Attributes;
  };
  const { questionText, options } = element.attributes;

  const [localQuestionText, setLocalQuestionText] =
    React.useState(questionText);
  const [localOptions, setLocalOptions] = React.useState(options);

  const handleAddOption = () => {
    setLocalOptions([...localOptions, `Option ${localOptions.length + 1}`]);
  };

  const handleEditOption = (index: number, value: string) => {
    const updatedOptions = [...localOptions];
    updatedOptions[index] = value;
    setLocalOptions(updatedOptions);
  };

  const handleRemoveOption = (index: number) => {
    setLocalOptions(localOptions.filter((_, i) => i !== index));
  };

  const saveProperties = () => {
    if (onAttributeSave) {
      onAttributeSave(formElement.id, {
        questionText: localQuestionText,
        options: localOptions,
      });
    }
  };

  return (
    <React.Fragment>
      <FormGroup>
        <Label>Question Text</Label>
        <Input
          type="text"
          value={localQuestionText}
          onChange={(e) => setLocalQuestionText(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Options</Label>
        {localOptions.map((option, index) => (
          <Row key={index} className="mb-2 align-items-center">
            <Col xs="8">
              <Input
                type="text"
                value={option}
                onChange={(e) => handleEditOption(index, e.target.value)}
              />
            </Col>
            <Col xs="2">
              <Button color="danger" onClick={() => handleRemoveOption(index)}>
                Remove
              </Button>
            </Col>
          </Row>
        ))}
        <Button color="primary" onClick={handleAddOption}>
          Add Option
        </Button>
      </FormGroup>

      <Button color="success" onClick={saveProperties}>
        Save
      </Button>
    </React.Fragment>
  );
}
