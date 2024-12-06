import React from "react";
import { useFormikContext } from "formik";
import {
  Button,
  ButtonGroup,
  Label,
  FormText,
} from "@ims-systems-00/ims-ui-kit";

interface ButtonGroupWithDataValidationProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  className?: string;
}

export const ButtonGroupWithDataValidation: React.FC<
  ButtonGroupWithDataValidationProps
> = ({ name, label, options, className }) => {
  const { touched, errors, setFieldValue, values, setFieldTouched } =
    useFormikContext<Record<string, unknown>>();

  const value = values[name] as string;
  const error = errors[name] as string | undefined;
  const isTouched = touched && (touched[name] as boolean | undefined);

  return (
    <div className={className}>
      <Label className="d-block mb-2">{label}</Label>
      <ButtonGroup className="mb-3">
        {options.map((option) => (
          <Button
            key={option.value}
            color="primary"
            outline
            active={value === option.value}
            onClick={() => {
              setFieldValue(name, option.value);
              setFieldTouched(name);
            }}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
      {isTouched && error ? (
        <FormText className="text-danger">{error}</FormText>
      ) : null}
    </div>
  );
};
