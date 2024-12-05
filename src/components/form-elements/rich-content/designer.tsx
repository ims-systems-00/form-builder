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
export function Designer({ formElement }: DesignerProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;
  return (
    <React.Fragment>
      <h5>Rich Content</h5>
      <p className="pb-4">
        This element is capable of basic text formating i.e. bold, italic,
        list-items.
      </p>
      <TextEditor readOnly minimal value={attributes.content} />
    </React.Fragment>
  );
}
