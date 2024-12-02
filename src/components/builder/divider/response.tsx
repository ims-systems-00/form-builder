import { FormElementInstance } from "../types";
import { Attributes } from "./attributes";

export type ResponseProps = {
  formElement: FormElementInstance;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Response({ formElement }: ResponseProps) {
  const element = formElement as Custom;
  const { paddingTop, paddingBottom, color } = element.attributes;

  return (
    <div className={`w-100 ${paddingTop} ${paddingBottom}`}>
      <hr
        className="border-1"
        style={{ borderColor: color }}
        aria-hidden="true"
      />
    </div>
  );
}
