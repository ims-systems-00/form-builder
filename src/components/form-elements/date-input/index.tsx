import { IoCalendarNumberOutline } from "react-icons/io5";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Properties } from "./properties";
import { Response } from "./reponse";
import React from "react";
const type: ElementType = "DateInput";
export const DateInput: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => (
      <IoCalendarNumberOutline size={size} />
    ),
    text: "Date Input",
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
