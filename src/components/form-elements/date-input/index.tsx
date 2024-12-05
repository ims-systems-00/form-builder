import React from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FormElement, ElementType } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./reponse";
import { Properties } from "./properties";
export {} from "./types";
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
