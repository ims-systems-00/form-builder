import React from "react";
import { Button, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";
import { FaThLarge, FaTh } from "react-icons/fa"; // Icons for layout selection

export type PropertiesProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes & {
    layout: "full" | "half";
    inputType: "radio" | "checkbox";
  };
};

export function Properties({ formElement, onAttributeSave }: PropertiesProps) {
  const element = formElement as Custom;
  const { questionText, options, required, layout, inputType } =
    element.attributes;

  const [localQuestionText, setLocalQuestionText] =
    React.useState(questionText);
  const [localOptions, setLocalOptions] = React.useState(options);
  const [localRequired, setLocalRequired] = React.useState(required);
  const [localLayout, setLocalLayout] = React.useState<"full" | "half">(layout);
  const [localInputType, setLocalInputType] = React.useState<
    "radio" | "checkbox"
  >(inputType);

  const handleAddOption = () => {
    setLocalOptions([
      ...localOptions,
      `Type option ${localOptions.length + 1}`,
    ]);
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
    if (typeof onAttributeSave === "function")
      onAttributeSave(formElement.id, {
        questionText: localQuestionText,
        options: localOptions,
        required: localRequired,
        layout: localLayout,
        inputType: localInputType,
      });
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

      <FormGroup>
        <Label>Input Type</Label>
        <div>
          <Button
            color={localInputType === "radio" ? "primary" : "secondary"}
            onClick={() => setLocalInputType("radio")}
          >
            Radio Button
          </Button>{" "}
          <Button
            color={localInputType === "checkbox" ? "primary" : "secondary"}
            onClick={() => setLocalInputType("checkbox")}
          >
            Checkbox
          </Button>
        </div>
      </FormGroup>

      <FormGroup>
        <Label>Option Layout</Label>
        <div className="d-flex align-items-center">
          <Button
            color={localLayout === "full" ? "primary" : "secondary"}
            className="mr-2"
            onClick={() => setLocalLayout("full")}
          >
            <FaThLarge /> Full Screen
          </Button>
          <Button
            color={localLayout === "half" ? "primary" : "secondary"}
            onClick={() => setLocalLayout("half")}
          >
            <FaTh /> Half Screen
          </Button>
        </div>
      </FormGroup>

      <FormGroup>
        <Label>
          <Input
            type="checkbox"
            checked={localRequired}
            onChange={(e) => setLocalRequired(e.target.checked)}
          />
          Required
        </Label>
      </FormGroup>

      <Button color="success" onClick={saveProperties}>
        Save
      </Button>
    </React.Fragment>
  );
}
