import React from "react";
import { HiSelector } from "react-icons/hi";
import { FormElement, ElementType } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./reponse";
import { Properties } from "./properties";
export {} from "./types";
const type: ElementType = "DropDown";
export const DropDown: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <HiSelector size={size} />,
    text: "DropDown",
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
