import React from "react";
import { FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./response";
import { Properties } from "./properties";

export const Header: FormElement = {
  type: "Header",
  designerButtton: {
    icon: <React.Fragment>H</React.Fragment>,
    text: "Header",
  },
  construct: (id: string) => ({
    id,
    type: "Header",
    attributes: attributes,
  }),

  DesignerComponent: Designer,
  ResponseComponent: Response,
  PropertiesComponent: Properties,
  validate: () => true,
};
