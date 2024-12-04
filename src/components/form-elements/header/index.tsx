import React from "react";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./response";
import { Properties } from "./properties";
import { TbHeading } from "react-icons/tb";
const type: ElementType = "Header";
export const Header: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <TbHeading size={size} />,
    text: "Header",
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
