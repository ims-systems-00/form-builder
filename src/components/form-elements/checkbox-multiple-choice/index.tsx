import React from "react";
import { GoTasklist } from "react-icons/go";
import { FormElement, ElementType } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./reponse";
import { Properties } from "./properties";
export {} from "./types";
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
