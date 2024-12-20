import { Button } from "@ims-systems-00/ims-ui-kit";
import { LiaSaveSolid } from "react-icons/lia";
import { LuText } from "react-icons/lu";
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
        <LuText size={30} /> Long Text Element{" "}
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
