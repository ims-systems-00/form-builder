import React from "react";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./response";
import { Properties } from "./properties";
const type: ElementType = "Divider";
export const Divider: FormElement = {
  type,
  designerButtton: {
    icon: <span style={{ fontWeight: "bold", fontSize: "1.2em" }}>—</span>,
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
