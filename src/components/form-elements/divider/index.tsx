import { RxDividerHorizontal } from "react-icons/rx";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Properties } from "./properties";
import { Response } from "./response";
import React from "react";

const type: ElementType = "Divider";
export const Divider: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <RxDividerHorizontal size={size} />,
    text: "Divider",
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
