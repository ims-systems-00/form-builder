import React from "react";
import { BsUiRadiosGrid } from "react-icons/bs";
import { FormElement, ElementType } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./reponse";
import { Properties } from "./properties";
export {} from "./types";
const type: ElementType = "RadioSingleChoice";
export const RadioSingleChoice: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <BsUiRadiosGrid size={size} />,
    text: "Single Choice",
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
