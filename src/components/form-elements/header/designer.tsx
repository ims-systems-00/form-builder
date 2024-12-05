import { FormElementInstance } from "../types";
import { Attributes } from "./attributes";
import { TbHeading } from "react-icons/tb";

export type DesignerProps = {
  formElement: FormElementInstance;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};

export function Designer({ formElement }: DesignerProps) {
  const element = formElement as Custom;
  const { text, level, alignment } = element.attributes;

  const HeaderTag = level.value as keyof JSX.IntrinsicElements;

  return (
    <div className="w-full flex flex-col gap-2">
      <h5>
        {" "}
        <TbHeading size={30} /> Header Element{" "}
      </h5>
      <p className="pb-4">
        This element is usually used for headline of a section
      </p>
      <HeaderTag className={`text-${alignment.value} font-bold m-0`}>
        {text}
      </HeaderTag>
    </div>
  );
}
