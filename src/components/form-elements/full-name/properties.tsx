import { Button } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes, validationSchema } from "./attributes";
import {
  FormikForm,
  SubmitButton,
  TextFieldWithDataValidation,
} from "../../formik";

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

      <SubmitButton>
        <Button block>Save</Button>
      </SubmitButton>
    </FormikForm>
  );
}
