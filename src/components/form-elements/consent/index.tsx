import { PiUserCircleCheckBold } from "react-icons/pi";
import { FormElement, ElementType } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./reponse";
import { Properties } from "./properties";
import React from "react";

const type: ElementType = "Consent";
export const Consent: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => (
      <PiUserCircleCheckBold size={size} />
    ),
    text: "Consent",
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
