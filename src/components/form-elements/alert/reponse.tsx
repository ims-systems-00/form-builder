import React from "react";
import { Alert, UncontrolledAlert } from "reactstrap";
import { FormElementInstance, OnResponseFunction } from "../types";
import { Attributes } from "./attributes";

export type ResponseProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
};
type Custom = FormElementInstance & {
  attributes: Attributes;
};
export function Response({ formElement }: ResponseProps) {
  const element = formElement as Custom;
  const { attributes } = element;
  const { message, alertType, dismissible } = attributes;

  return (
    <React.Fragment>
      {!dismissible && (
        <Alert color={alertType} fade>
          {message}
        </Alert>
      )}

      {dismissible && (
        <UncontrolledAlert color={alertType}>{message}</UncontrolledAlert>
      )}
    </React.Fragment>
  );
}
