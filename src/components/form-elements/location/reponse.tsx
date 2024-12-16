import { Alert, FormGroup, Label, Select } from "@ims-systems-00/ims-ui-kit";
import usePlacesAutocomplete from "use-places-autocomplete";
import { FormElementInstance, OnResponseFunction } from "../types";
import { Attributes } from "./attributes";
import { useFormBuilder } from "../../builder/form-builder/useFormBuilder";
import React from "react";

export type DesignerProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Response({ formElement, onResponse }: DesignerProps) {
  const {
    setValue,
    suggestions: { status, data },
  } = usePlacesAutocomplete();
  const { isGoogleJsAPILoaded } = useFormBuilder();

  const element = formElement as Custom;
  const { attributes } = element;

  const handleInputChange = (newValue: string): void => {
    setValue(newValue);
  };

  const handleChange = (selectedItem: unknown): void => {
    if (typeof onResponse === "function") {
      const value = selectedItem ? (selectedItem as {label:string,value:string}).value : null;
      onResponse(formElement.id, value);
    }
  };

  const mapPlacesToOptions = () =>
    status === "OK"
      ? data.map((place) => ({
          value: place.description,
          label: place.description,
        }))
      : [];

  if (!isGoogleJsAPILoaded)
    return <Alert color="warning">Google API not loaded</Alert>;

  return (
    <FormGroup>
      <Label>
        {attributes.label} {attributes.required && "*"}
      </Label>
      <Select
        placeholder={attributes.placeholder}
        onInputChange={(newValue) => handleInputChange(newValue)}
        onChange={handleChange}
        options={mapPlacesToOptions()}
      />
      {attributes.subLabel && (
        <Label>
          <small>{attributes.subLabel}</small>
        </Label>
      )}
    </FormGroup>
  );
}
