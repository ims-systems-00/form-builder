import React from "react";
import { FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./reponse";
import { Properties } from "./properties";
export {} from "./types";
export const FullName: FormElement = {
  type: "FullName",
  designerButtton: {
    icon: <React.Fragment>F</React.Fragment>,
    text: "Full Name",
  },
  construct: (id: string) => ({
    id,
    type: "FullName",
    attributes: attributes,
  }),

  DesignerComponent: Designer,
  ResponseComponent: Response,
  PropertiesComponent: Properties,
  validate: () => true,
};
