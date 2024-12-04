import { Button } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes, validationSchema } from "./attributes";
import {
  FormikForm,
  SelectFieldWithDataValidation,
  SubmitButton,
  TextFieldWithDataValidation,
} from "../../formik";

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
      <SelectFieldWithDataValidation
        name="colorScheme"
        label="Color Scheme"
        hintText="Controls the color scheme of the element"
        options={[
          { value: "primary", label: "Primary" },
          { value: "secondary", label: "Secondary" },
          { value: "success", label: "Success" },
          { value: "danger", label: "Danger" },
          { value: "warning", label: "Warning" },
          { value: "info", label: "Info" },
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
        ]}
      />

      <TextFieldWithDataValidation
        name="disclaimer"
        label="Disclaimer"
        type="text"
        hintText="This text will be displayed to the user"
      />

      <TextFieldWithDataValidation
        name="consent"
        label="Consent"
        type="textarea"
        hintText="This text will be displayed to the user"
      />

      <SubmitButton>
        <Button color="primary" block>
          Save
        </Button>
      </SubmitButton>
    </FormikForm>
  );
}
