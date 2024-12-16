import React from "react";
import { GoTasklist } from "react-icons/go";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Properties } from "./properties";
import { Response } from "./reponse";
export { } from "./types";
const type: ElementType = "CheckBoxMultipleChoice";
export const CheckBoxMultipleChoice: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <GoTasklist size={size} />,
    text: "Multiple Choice",
  },
  construct: (id: string) => ({
    id,
    type,
    attributes: attributes,
  }),
  DesignerComponent: Designer,
  ResponseComponent: Response,
  PropertiesComponent: Properties,
  validate: () => true,
};
