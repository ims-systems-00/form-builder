import React from "react";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Select,
} from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../../builder/types";
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
  const { paddingTop, paddingBottom, color } = element.attributes;

  const [localPaddingTop, setLocalPaddingTop] = React.useState(paddingTop);
  const [localPaddingBottom, setLocalPaddingBottom] =
    React.useState(paddingBottom);
  const [localColor, setLocalColor] = React.useState(color);

  const saveProperties = () => {
    onAttributeSave(formElement.id, {
      paddingTop: localPaddingTop,
      paddingBottom: localPaddingBottom,
      color: localColor,
    });
  };

  return (
    <React.Fragment>
      <FormGroup>
        <Label>Top Padding</Label>
        <Select
          value={localPaddingTop}
          onChange={(newValue: unknown) => {
            if (typeof newValue === "string") {
              setLocalPaddingTop(newValue as Attributes["paddingTop"]);
            }
          }}
          options={[
            { value: "pt-0", label: "Padding 0" },
            { value: "pt-1", label: "Padding 1" },
            { value: "pt-2", label: "Padding 2" },
            { value: "pt-3", label: "Padding 3" },
            { value: "pt-4", label: "Padding 4" },
            { value: "pt-5", label: "Padding 5" },
          ]}
        />
      </FormGroup>
      <FormGroup>
        <Label>Bottom Padding</Label>
        <Select
          value={localPaddingBottom}
          onChange={(newValue: unknown) => {
            if (typeof newValue === "string") {
              setLocalPaddingBottom(newValue as Attributes["paddingBottom"]);
            }
          }}
          options={[
            { value: "pb-0", label: "Padding 0" },
            { value: "pb-1", label: "Padding 1" },
            { value: "pb-2", label: "Padding 2" },
            { value: "pb-3", label: "Padding 3" },
            { value: "pb-4", label: "Padding 4" },
            { value: "pb-5", label: "Padding 5" },
          ]}
        />
      </FormGroup>
      <FormGroup>
        <Label>Divider Color</Label>
        <Input
          type="color"
          value={localColor}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLocalColor(e.target.value)
          }
        />
      </FormGroup>
      <Button onClick={saveProperties}>Save</Button>
    </React.Fragment>
  );
}
