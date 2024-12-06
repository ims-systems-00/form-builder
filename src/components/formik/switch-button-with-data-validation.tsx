import React from "react";
import { useFormikContext } from "formik";
import { FormGroup, Input, Label, FormText } from "@ims-systems-00/ims-ui-kit";

interface SwitchButtonWithDataValidationProps {
  name: string;
  label?: string;
  hintText?: string;
  className?: string;
  [key: string]: unknown;
}

export const SwitchButtonWithDataValidation: React.FC<
  SwitchButtonWithDataValidationProps
> = ({ name, label, hintText, className, ...rest }) => {
  const { touched, errors, setFieldValue, values, setFieldTouched } =
    useFormikContext<Record<string, unknown>>();

  // TypeScript-safe value access using name
  const value = values[name] as boolean;
  const error = errors[name] as string | undefined;
  const isTouched = touched && (touched[name] as boolean | undefined);

  return (
    <FormGroup switch>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        id={name}
        type="switch"
        checked={value}
        onChange={(e) => setFieldValue(name, e.currentTarget.checked)}
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
