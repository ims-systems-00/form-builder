import { Button } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes, validationSchema } from "./attributes";
import {
  FormikForm,
  SubmitButton,
  TextFieldWithDataValidation,
} from "../../formik";
import { FormGroup, Label, Input } from "reactstrap";
import { LiaSaveSolid } from "react-icons/lia";
import React from "react";

export type PropertiesProps = {
  formElement: FormElementInstance;
  onAttributeSave: OnAttributeSaveFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Properties({ formElement, onAttributeSave }: PropertiesProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;

  return (
    <FormikForm
      initialValues={attributes}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (typeof onAttributeSave === "function") {
          onAttributeSave(formElement.id, values);
        }
      }}
    >
      {/* Padding Top */}
      <FormGroup>
        <Label for="paddingTop">Top Padding</Label>
        <Input
          id="paddingTop"
          name="paddingTop"
          type="range"
          min="0"
          max="100"
          defaultValue={attributes.paddingTop}
          onChange={(e) => {
            attributes.paddingTop = Number(e.target.value);
          }}
        />
        <small className="form-text text-muted">
          Current Value: {attributes.paddingTop}px
        </small>
      </FormGroup>

      {/* Padding Bottom */}
      <FormGroup>
        <Label for="paddingBottom">Bottom Padding</Label>
        <Input
          id="paddingBottom"
          name="paddingBottom"
          type="range"
          min="0"
          max="100"
          defaultValue={attributes.paddingBottom}
          onChange={(e) => {
            attributes.paddingBottom = Number(e.target.value);
          }}
        />
        <small className="form-text text-muted">
          Current Value: {attributes.paddingBottom}px
        </small>
      </FormGroup>

      {/* Line Width */}
      <FormGroup>
        <Label for="lineWidth">Line Width</Label>
        <Input
          id="lineWidth"
          name="lineWidth"
          type="range"
          min="1"
          max="10"
          defaultValue={attributes.lineWidth}
          onChange={(e) => {
            attributes.lineWidth = Number(e.target.value);
          }}
        />
        <small className="form-text text-muted">
          Current Value: {attributes.lineWidth}px
        </small>
      </FormGroup>

      {/* Divider Color */}
      <TextFieldWithDataValidation
        name="color"
        label="Divider Color"
        type="color"
        hintText="This text will be displayed as the Divider Color"
      />

      {/* Save Button */}
      <SubmitButton>
        <Button block>
          {" "}
          Save Changes <LiaSaveSolid />
        </Button>
      </SubmitButton>
    </FormikForm>
  );
}
