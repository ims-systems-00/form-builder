import React, { useState } from "react";
import { Alert, UncontrolledAlert } from "reactstrap";
import { FormElementInstance, OnResponseFunction } from "../types";

export type ResponseProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
};

export function Response({ formElement, onResponse }: ResponseProps) {
  const { attributes } = formElement;
  const { message, alertType, dismissible } = attributes;

  return (
    <>
      {!dismissible && (
        <Alert color={alertType} fade>
          {message}
        </Alert>
      )}

      {dismissible && (
        <UncontrolledAlert color={alertType}>{message}</UncontrolledAlert>
      )}
    </>
  );
}
