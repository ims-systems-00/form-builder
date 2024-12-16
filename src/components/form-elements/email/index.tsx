import { MdOutlineEmail } from "react-icons/md";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Properties } from "./properties";
import { Response } from "./reponse";
import React from "react";

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
