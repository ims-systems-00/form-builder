import { BsUiRadiosGrid } from "react-icons/bs";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Properties } from "./properties";
import { Response } from "./reponse";
import React from "react";

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
