import { Button, Label, FormGroup, Input } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes, validationSchema } from "./attributes";
import {
  FormikForm,
  SubmitButton,
  TextFieldWithDataValidation,
} from "../../formik";
import { MdOutlinePersonOutline } from "react-icons/md";
import { LiaSaveSolid } from "react-icons/lia";
import { useState } from "react";

export type DesignerProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Properties({ formElement, onAttributeSave }: DesignerProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;
  const [localRequired, setLocalRequired] = useState(attributes.required);

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
      <h5>
        {" "}
        <MdOutlinePersonOutline size={30} /> Full Name Element{" "}
      </h5>
      <p className="pb-4">
        Select the associated setting to customize this element.
      </p>
      <Label className="mb-4">
        <strong>First Name properties</strong>
      </Label>
      <TextFieldWithDataValidation
        name="firstNameLabel"
        label="First Name Label"
        type="text"
        hintText="This text will be displayed above the first name field"
      />

      <TextFieldWithDataValidation
        name="firstNamePlaceholder"
        label="First Name Placeholder"
        type="text"
        hintText="This text will be displayed as a hint in the first name field"
      />
      <Label className="mb-4">
        <strong>Last Name properties</strong>
      </Label>

      <TextFieldWithDataValidation
        name="lastNameLabel"
        label="Last Name Label"
        type="text"
        hintText="This text will be displayed above the last name field"
      />

      <TextFieldWithDataValidation
        name="lastNamePlaceholder"
        label="Last Name Placeholder"
        type="text"
        hintText="This text will be displayed as a hint in the last name field"
      />

      <TextFieldWithDataValidation
        name="subLabel"
        label="Sub label"
        type="text"
        hintText="This text will be displayed at the bottom of the input fields"
      />

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

      <SubmitButton>
        <Button color="primary" block>
          Save Changes <LiaSaveSolid />
        </Button>
      </SubmitButton>
    </FormikForm>
  );
}
