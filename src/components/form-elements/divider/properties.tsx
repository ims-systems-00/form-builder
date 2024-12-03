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
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (typeof onAttributeSave === "function") {
          onAttributeSave(formElement.id, values);
        }
      }}
    >
      <SelectFieldWithDataValidation
        name="paddingTop"
        label="Top Padding"
        hintText="This text will be displayed as the Top Padding"
        options={[
          { value: "pt-0", label: "None" },
          { value: "pt-1", label: "Extra Small" },
          { value: "pt-2", label: "Small" },
          { value: "pt-3", label: "Medium" },
          { value: "pt-4", label: "Large" },
          { value: "pt-5", label: "Extra Large" },
        ]}
      />

      <SelectFieldWithDataValidation
        name="paddingBottom"
        label="Bottom Padding"
        hintText="This text will be displayed as the Bottom Padding"
        options={[
          { value: "pb-0", label: "None" },
          { value: "pb-1", label: "Extra Small" },
          { value: "pb-2", label: "Small" },
          { value: "pb-3", label: "Medium" },
          { value: "pb-4", label: "Large" },
          { value: "pb-5", label: "Extra Large" },
        ]}
      />

      <TextFieldWithDataValidation
        name="color"
        label="Divider Color"
        type="color"
        hintText="This text will be displayed as the Divider Color"
      />

      <SubmitButton>
        <Button block>Save</Button>
      </SubmitButton>
    </FormikForm>
  );
}
