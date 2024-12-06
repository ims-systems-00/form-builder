import React from "react";
import {
  Button,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
} from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";
import { RiDeleteBinLine } from "react-icons/ri";
import { LiaSaveSolid } from "react-icons/lia";
import { GoTasklist } from "react-icons/go";

export type PropertiesProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes & {
    layout: "full" | "half";
  };
};

export function Properties({ formElement, onAttributeSave }: PropertiesProps) {
  const element = formElement as Custom;
  const { questionText, options, required } = element.attributes;

  const [localQuestionText, setLocalQuestionText] =
    React.useState(questionText);
  const [localOptions, setLocalOptions] = React.useState([...options]);
  const [localRequired, setLocalRequired] = React.useState(required);
  // const [localLayout, setLocalLayout] = React.useState<"full" | "half">(layout);

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
    if (typeof onAttributeSave === "function") {
      onAttributeSave(formElement.id, {
        questionText: localQuestionText,
        options: localOptions,
        required: localRequired,
        // layout: localLayout,
      });
    }
  };

  return (
    <React.Fragment>
      <h5>
        {" "}
        <GoTasklist size={30} /> Multiple Choice Element{" "}
      </h5>
      <p className="pb-4">
        Select the associated setting to customize this element.
      </p>

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
          <InputGroup>
            <Input
              type="text"
              value={option}
              onChange={(e) => handleEditOption(index, e.target.value)}
            />
            <InputGroupText>
              <Button
                className="py-0 px-1 border-0"
                color="danger"
                outline
                onClick={() => handleRemoveOption(index)}
              >
                <RiDeleteBinLine />
              </Button>
            </InputGroupText>
          </InputGroup>
          // <Row key={index} className="mb-2 align-items-center">
          //   <Col xs="8">
          //     <Input
          //       type="text"
          //       value={option}
          //       onChange={(e) => handleEditOption(index, e.target.value)}
          //     />
          //   </Col>
          //   <Col xs="2">
          //     <Button color="danger" onClick={() => handleRemoveOption(index)}>
          //       Remove
          //     </Button>
          //   </Col>
          // </Row>
        ))}
        <Button color="primary" onClick={handleAddOption}>
          Add Option
        </Button>
      </FormGroup>

      {/* <FormGroup>
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
      </FormGroup> */}
      <Label>
        Toggle this switch to mark the field as 'Required' or 'Optional,'
        ensuring flexibility in your form's input rules.
      </Label>
      <FormGroup switch className="pull-right">
        <Input
          type="switch"
          checked={localRequired}
          onChange={(e) => setLocalRequired(e.target.checked)}
        />
        <Label>Required</Label>
      </FormGroup>

      <Button color="success" onClick={saveProperties} block>
        Save Changes <LiaSaveSolid />
      </Button>
    </React.Fragment>
  );
}
