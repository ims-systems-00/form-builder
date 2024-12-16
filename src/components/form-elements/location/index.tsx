import { HiOutlineLocationMarker } from "react-icons/hi";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Properties } from "./properties";
import { Response } from "./reponse";
import React from "react";


const type: ElementType = "Location";

export const Location: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <HiOutlineLocationMarker size={size} />,
    text: "Location",
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
