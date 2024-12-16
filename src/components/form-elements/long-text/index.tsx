import { LuText } from "react-icons/lu";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Properties } from "./properties";
import { Response } from "./response";
import React from "react";

const type: ElementType = "LongText";
export const LongText: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <LuText size={size} />,
    text: "Long Text",
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
