import React from "react";
import { useFormikContext } from "formik";
import {
  FormGroup,
  Label,
  FormText,
  TextEditor,
} from "@ims-systems-00/ims-ui-kit";

interface RichTextFieldWithDataValidationProps {
  name: string;
  label?: string;
  hintText?: string;
  className?: string;
  [key: string]: unknown;
}

export const RichTextFieldWithDataValidation: React.FC<
  RichTextFieldWithDataValidationProps
> = ({ name, label, hintText }) => {
  const { touched, errors, setFieldValue, values, setFieldTouched } =
    useFormikContext<Record<string, unknown>>();

  // TypeScript-safe value access using name
  const value = values[name] as string;
  const error = errors[name] as string | undefined;
  const isTouched = touched && (touched[name] as boolean | undefined);

  return (
    <FormGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <TextEditor
        value={value}
        onDataStructureChange={(e: string) => setFieldValue(name, e)}
        onSubmit={() => setFieldTouched(name)}
        minimal
      />
      {isTouched && error ? (
        <FormText className="text-danger">{error}</FormText>
      ) : (
        <FormText>{hintText}</FormText>
      )}
    </FormGroup>
  );
};
