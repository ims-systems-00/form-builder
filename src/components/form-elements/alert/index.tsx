import { FiAlertCircle } from "react-icons/fi";
import { FormElement, ElementType } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./reponse";
import { Properties } from "./properties";
import React from "react";

const type: ElementType = "Alert";
export const Alert: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <FiAlertCircle size={size} />,
    text: "Alert",
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
