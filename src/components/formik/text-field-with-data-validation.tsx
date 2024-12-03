import React from "react";
import { useFormikContext } from "formik";
import { FormGroup, Input, Label, FormText } from "@ims-systems-00/ims-ui-kit";

interface TextFieldWithDataValidationProps {
  name: string;
  label?: string;
  type: "text" | "number" | "email" | "password" | "color";
  hintText?: string;
  className?: string;
  [key: string]: any;
}

export const TextFieldWithDataValidation: React.FC<
  TextFieldWithDataValidationProps
> = ({ name, label, type, hintText, className, ...rest }) => {
  const { touched, errors, setFieldValue, values, setFieldTouched } =
    useFormikContext<Record<string, any>>();

  // TypeScript-safe value access using name
  const value = values[name];
  const error = errors[name] as string | undefined;
  const isTouched = touched && (touched[name] as boolean | undefined);

  return (
    <FormGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        id={name}
        type={type}
        value={value}
        onChange={(e) => setFieldValue(name, e.currentTarget.value)}
        onBlur={() => setFieldTouched(name)}
        invalid={Boolean(isTouched && error)}
        className={className}
        {...rest}
      />
      {isTouched && error ? (
        <FormText className="text-danger">{error}</FormText>
      ) : (
        <FormText>{hintText}</FormText>
      )}
    </FormGroup>
  );
};
