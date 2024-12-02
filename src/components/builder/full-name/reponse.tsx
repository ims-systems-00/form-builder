// import { FormGroup, Input, Label } from "@ims-systems-00/ims-ui-kit";
// import { FormElementInstance, OnResponseFunction } from "../types";
// import { Attributes } from "./attributes";
// export type DesignerProps = {
//   formElement: FormElementInstance;
//   onResponse?: OnResponseFunction;
// };

// type Custom = FormElementInstance & {
//   attributes: Attributes;
// };
// export function Response({ formElement, onResponse }: DesignerProps) {
//   const element = formElement as Custom;
//   const attributes = element.attributes;
//   return (
//     <FormGroup>
//       <Label>
//         {attributes.label} {attributes.required && "*"}
//       </Label>
//       <Input
//         type="textarea"
//         rows={4}
//         placeholder={attributes.placeholder}
//         defaultValue={attributes.defaultValue}
//         onChange={(e) => {
//           if (typeof onResponse === "function")
//             onResponse(formElement.id, e.currentTarget.value);
//         }}
//       />
//       <Label>
//         <small>{attributes.subLabel}</small>
//       </Label>
//     </FormGroup>
//   );
// }
import React from "react";
import { FormGroup, Input, Label } from "@ims-systems-00/ims-ui-kit";
import { FormElementInstance, OnResponseFunction } from "../types";
import { Attributes } from "./attributes";

export type ResponseProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
  isValid?: boolean;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Response({ formElement, onResponse, isValid }: ResponseProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onResponse === "function") {
      onResponse(formElement.id, JSON.stringify({ firstName: e.target.value }));
    }
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onResponse === "function") {
      onResponse(formElement.id, JSON.stringify({ lastName: e.target.value }));
    }
  };

  return (
    <FormGroup>
      <div className="d-flex">
        <div className="mr-2 flex-grow-1">
          <Label>
            {attributes.firstNameLabel} {attributes.required && "*"}
          </Label>
          <Input
            placeholder={attributes.firstNamePlaceholder}
            defaultValue={attributes.defaultFirstNameValue}
            onChange={handleFirstNameChange}
            invalid={isValid === false}
          />
        </div>
        <div className="flex-grow-1">
          <Label>
            {attributes.lastNameLabel} {attributes.required && "*"}
          </Label>
          <Input
            placeholder={attributes.lastNamePlaceholder}
            defaultValue={attributes.defaultLastNameValue}
            onChange={handleLastNameChange}
            invalid={isValid === false}
          />
        </div>
      </div>
      <Label>
        <small>{attributes.subLabel}</small>
      </Label>
    </FormGroup>
  );
}
