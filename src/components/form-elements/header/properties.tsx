import { Button } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes, validationSchema } from "./attributes";
import {
  FormikForm,
  SelectFieldWithDataValidation,
  SubmitButton,
  TextFieldWithDataValidation,
} from "../../formik";

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
      <TextFieldWithDataValidation
        name="text"
        label="Header Text"
        type="text"
        hintText="This text will be displayed as the header of a section."
      />

      <SelectFieldWithDataValidation
        name="level"
        label="Header Size"
        hintText="Controls the font size of the header."
        options={[
          { value: "h1", label: "H1" },
          { value: "h2", label: "H2" },
          { value: "h3", label: "H3" },
          { value: "h4", label: "H4" },
          { value: "h5", label: "H5" },
          { value: "h6", label: "H6" },
        ]}
      />

      <SelectFieldWithDataValidation
        name="alignment"
        label="Alignment"
        hintText="Controls the text alignment of the header."
        options={[
          { value: "left", label: "Left" },
          { value: "center", label: "Center" },
          { value: "right", label: "Right" },
        ]}
      />

      <SubmitButton>
        <Button color="primary" block>
          Save
        </Button>
      </SubmitButton>
    </FormikForm>
  );
}
