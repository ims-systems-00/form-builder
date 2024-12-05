import { TextEditor } from "@ims-systems-00/ims-ui-kit";
import React from "react";
import { FormElementInstance } from "../types";
import { Attributes } from "./attributes";
export type DesignerProps = {
  formElement: FormElementInstance;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};
export function Response({ formElement }: DesignerProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;
  return (
    <React.Fragment>
      <TextEditor readOnly minimal value={attributes.content} />
    </React.Fragment>
  );
}
