import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FormElement, ElementType } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./reponse";
import { Properties } from "./properties";
export {} from "./types";
const type: ElementType = "Email";
export const Email: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <MdOutlineEmail size={size} />,
    text: "Email",
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
