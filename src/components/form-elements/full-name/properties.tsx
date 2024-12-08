import { Button, Label } from "@ims-systems-00/ims-ui-kit";
import { LiaSaveSolid } from "react-icons/lia";
import { MdOutlinePersonOutline } from "react-icons/md";
import {
  FormikForm,
  SubmitButton,
  SwitchButtonWithDataValidation,
  TextFieldWithDataValidation,
} from "../../formik";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes, validationSchema } from "./attributes";

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
