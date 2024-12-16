import React from "react";
import { Button, Col, Label, Row } from "@ims-systems-00/ims-ui-kit";
import { FaRegAddressBook } from "react-icons/fa";
import { LiaSaveSolid } from "react-icons/lia";
import {
  FormikForm,
  SubmitButton,
  SwitchButtonWithDataValidation,
  TextFieldWithDataValidation,
} from "../../formik";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes, validationSchema } from "./attributes";

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
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (typeof onAttributeSave === "function") {
          onAttributeSave(formElement.id, values);
        }
      }}
    >
      <h5>
        {" "}
        <FaRegAddressBook size={30} /> Address Element{" "}
      </h5>
      <p className="pb-4">
        Select the associated setting to customize this element.
      </p>

      <Label className="mb-4">
        <strong>Street Address Line 1 Properties</strong>
      </Label>
      <Row>
        <Col>
          <TextFieldWithDataValidation
            name="streetAddressLabel"
            label="Street Address Label"
            type="text"
            hintText="This text will be displayed at the bottom of the input field"
          />
        </Col>

        <Col>
          <TextFieldWithDataValidation
            name="streetAddressPlaceholder"
            label="Street Address Placeholder"
            type="text"
            hintText="This text will be displayed as a hint in the input field"
          />
        </Col>
      </Row>

      <Label className="mb-3">
        <strong>Street Address Line 2 Properties</strong>
      </Label>
      <Row>
        <Col>
          <TextFieldWithDataValidation
            name="streetAddressLine2Label"
            label="Street Address Line 2 Label"
            type="text"
            hintText="This text will be displayed at the bottom of the input field"
          />
        </Col>

        <Col>
          <TextFieldWithDataValidation
            name="streetAddressLine2Placeholder"
            label="Street Address Line 2 Placeholder"
            type="text"
            hintText="This text will be displayed as a hint in the input field"
          />
        </Col>
      </Row>

      <Label className="mb-3">
        <strong>City Properties</strong>
      </Label>

      <Row>
        <Col>
          <TextFieldWithDataValidation
            name="cityLabel"
            label="City Label"
            type="text"
            hintText="This text will be displayed at the bottom of the input field"
          />
        </Col>
        <Col>
          <TextFieldWithDataValidation
            name="cityPlaceholder"
            label="City Placeholder"
            type="text"
            hintText="This text will be displayed as a hint in the input field"
          />
        </Col>
      </Row>

      <Label className="mb-3">
        <strong>State Properties</strong>
      </Label>

      <Row>
        <Col>
          <TextFieldWithDataValidation
            name="stateLabel"
            label="State Label"
            type="text"
            hintText="This text will be displayed at the bottom of the input field"
          />
        </Col>
        <Col>
          <TextFieldWithDataValidation
            name="statePlaceholder"
            label="State Placeholder"
            type="text"
            hintText="This text will be displayed as a hint in the input field"
          />
        </Col>
      </Row>

      <Label className="mb-3">
        <strong>Postal Code Properties</strong>
      </Label>

      <Row>
        <Col>
          <TextFieldWithDataValidation
            name="postalCodeLabel"
            label="Postal Code Label"
            type="text"
            hintText="This text will be displayed at the bottom of the input field"
          />
        </Col>
        <Col>
          <TextFieldWithDataValidation
            name="postalCodePlaceholder"
            label="Postal Code Placeholder"
            type="text"
            hintText="This text will be displayed as a hint in the input field"
          />
        </Col>
      </Row>

      <SwitchButtonWithDataValidation
        name="required"
        label="Toggle this switch to mark the field as 'Required' or 'Optional,'
        ensuring flexibility in your form's input rules."
      />
      <SubmitButton>
        <Button color="primary" block>
          Save Changes <LiaSaveSolid />
        </Button>
      </SubmitButton>
    </FormikForm>
  );
}
