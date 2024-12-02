import React from "react";
import {
  Button,
  FormGroup,
  Input,
  FormText,
  Select,
} from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes } from "./attributes";

export type PropertiesProps = {
  formElement: FormElementInstance;
  onAttributeSave: OnAttributeSaveFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Properties({ formElement, onAttributeSave }: PropertiesProps) {
  const element = formElement as Custom;
  const { text, level, alignment } = element.attributes;

  const [localText, setLocalText] = React.useState(text);
  const [localLevel, setLocalLevel] = React.useState(level);
  const [localAlignment, setLocalAlignment] = React.useState(alignment);

  const saveProperties = () => {
    onAttributeSave(formElement.id, {
      text: localText,
      level: localLevel,
      alignment: localAlignment,
    });
  };

  return (
    <React.Fragment>
      <FormGroup>
        <FormText>Header Text</FormText>
        <Input
          value={localText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLocalText(e.target.value)
          }
        />
      </FormGroup>
      <FormGroup>
        <FormText>Header Level</FormText>
        <Select
          value={localLevel}
          onChange={(newValue: unknown) => {
            if (typeof newValue === "string") {
              setLocalLevel(newValue as Attributes["level"]);
            }
          }}
          options={[
            { value: "h1", label: "H1" },
            { value: "h2", label: "H2" },
            { value: "h3", label: "H3" },
            { value: "h4", label: "H4" },
            { value: "h5", label: "H5" },
            { value: "h6", label: "H6" },
          ]}
        />
      </FormGroup>
      <FormGroup>
        <FormText>Alignment</FormText>
        <Select
          value={localAlignment}
          onChange={(newValue: unknown) => {
            if (typeof newValue === "string") {
              setLocalAlignment(newValue as Attributes["alignment"]);
            }
          }}
          options={[
            { value: "left", label: "Left" },
            { value: "center", label: "Center" },
            { value: "right", label: "Right" },
          ]}
        />
      </FormGroup>
      <Button onClick={saveProperties}>Save</Button>
    </React.Fragment>
  );
}
