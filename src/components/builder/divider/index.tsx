import React from "react";
import { FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./response";
import { Properties } from "./properties";
export const Divider: FormElement = {
  type: "Divider",
  designerButtton: {
    icon: <span style={{ fontWeight: "bold", fontSize: "1.2em" }}>—</span>,
    text: "Divider",
  },
  construct: (id: string) => ({
    id,
    type: "Divider",
    attributes: attributes,
  }),
  DesignerComponent: Designer,
  ResponseComponent: Response,
  PropertiesComponent: Properties,
  validate: () => true,
};
