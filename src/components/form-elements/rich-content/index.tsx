import { TbTextCaption } from "react-icons/tb";
import { FormElement, ElementType } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./reponse";
import { Properties } from "./properties";
import React from "react";

const type: ElementType = "RichContent";
export const RichContent: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <TbTextCaption size={size} />,
    text: "Rich Content",
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
