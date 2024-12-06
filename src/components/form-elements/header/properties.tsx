import { Button } from "@ims-systems-00/ims-ui-kit";
import {
  ButtonGroupWithDataValidation,
  FormikForm,
  SubmitButton,
  SwitchButtonWithDataValidation,
  TextFieldWithDataValidation,
} from "../../formik";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes, validationSchema } from "./attributes";
import { TbHeading } from "react-icons/tb";
import { LiaSaveSolid } from "react-icons/lia";
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
      initialValues={{
        ...attributes,
      }}
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
        <TbHeading size={30} /> Header Element{" "}
      </h5>
      <p className="pb-4">
        Select the associated setting to customize this element.
      </p>
      <TextFieldWithDataValidation
        name="text"
        label="Header Text"
        type="text"
        hintText="This text will be displayed as the header of a section."
      />
      <ButtonGroupWithDataValidation
        name="headerSize"
        label="Header Size"
        options={[
          { value: "h1", label: "H1" },
          { value: "h2", label: "H2" },
          { value: "h3", label: "H3" },
          { value: "h4", label: "H4" },
          { value: "h5", label: "H5" },
          { value: "h6", label: "H6" },
        ]}
      />
      <ButtonGroupWithDataValidation
        name="headerAlignment"
        label="Header Alignment"
        options={[
          { value: "left", label: "Left" },
          { value: "center", label: "Center" },
          { value: "end", label: "Right" },
        ]}
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
