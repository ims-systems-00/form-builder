import { MdOutlinePersonOutline } from "react-icons/md";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Properties } from "./properties";
import { Response } from "./response";
import React from "react";

const type: ElementType = "FullName";

export const FullName: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => (
      <MdOutlinePersonOutline size={size} />
    ),
    text: "Full Name",
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
