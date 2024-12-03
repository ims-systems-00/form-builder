import React, { useEffect } from "react";
import { useFormikContext } from "formik";
import { FormGroup, FormText, Label, Select } from "@ims-systems-00/ims-ui-kit";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectFieldWithDataValidationProps {
  name: string;
  placeholder?: string;
  label?: string;
  hintText?: string;
  options: SelectOption[];
  className?: string;
  onChange?: (value: SelectOption) => void;
  isMulti?: boolean;
}

export const SelectFieldWithDataValidation: React.FC<
  SelectFieldWithDataValidationProps
> = ({
  name,
  placeholder,
  label,
  hintText,
  options = [],
  className,
  isMulti = false,
  onChange = () => {},
}) => {
  // Type the FormikContext correctly
  const { touched, errors, setFieldValue, values, setFieldTouched } =
    useFormikContext<Record<string, any>>();

  // TypeScript-safe value access using name
  const value = values[name];
  const error = errors[name] as SelectOption | undefined;
  const isTouched = touched && (touched[name] as boolean | undefined);

  //   console.log("SelectFieldWithDataValidation", value, error, isTouched);

  useEffect(() => {
    if (isTouched && !error) {
      onChange(value);
    }
  }, [isTouched, error, value]);

  return (
    <FormGroup>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Select
        id={name}
        name={name}
        value={value}
        onChange={(selectedItem) => {
          setFieldValue(name, selectedItem);
        }}
        onBlur={() => setFieldTouched(name)}
        options={options}
        placeholder={placeholder}
        className={className}
        isMulti={isMulti}
      />
      {isTouched && error ? (
        <FormText className="text-danger">{error.label}</FormText>
      ) : (
        <FormText>{hintText}</FormText>
      )}
    </FormGroup>
  );
};
