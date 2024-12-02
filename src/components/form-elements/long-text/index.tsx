import React from "react";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./response";
import { Properties } from "./properties";
export {} from "./types";
import { LuText } from "react-icons/lu";

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
