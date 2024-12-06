import { Button, Label, Input, FormGroup } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes, validationSchema } from "./attributes";
import {
  FormikForm,
  SubmitButton,
  TextFieldWithDataValidation,
} from "../../formik";
import { LuTextCursorInput } from "react-icons/lu";
import { LiaSaveSolid } from "react-icons/lia";
import { useState } from "react";

export type DesignerProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

type ThisElementInstance = FormElementInstance & {
  attributes: Attributes;
};
export function Properties({ formElement, onAttributeSave }: DesignerProps) {
  const element = formElement as ThisElementInstance;
  const attributes = element.attributes;
  const [localRequired, setLocalRequired] = useState(attributes.required);
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
        <LuTextCursorInput size={30} /> Text Input Element{" "}
      </h5>
      <p className="pb-4">
        Select the associated setting to customize this element.
      </p>
      <TextFieldWithDataValidation
        name="label"
        label="Question/Label"
        type="text"
        hintText="This text will be displayed at the top of the input field"
      />

      <TextFieldWithDataValidation
        name="placeholder"
        label="Hint/Placeholder"
        type="text"
        hintText="This text will be displayed as a hint in the input field"
      />

      <TextFieldWithDataValidation
        name="subLabel"
        label="Helper Text/Sub-Label"
        type="text"
        hintText="This text will be displayed at the bottom of the input field"
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
