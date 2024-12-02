
import React from "react";
import { FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./reponse";
import { Properties } from "./properties";
export {} from "./types";
export const TextInput: FormElement = {
  type: "TextInput",
  designerButtton: {
    icon: <React.Fragment>T</React.Fragment>,
    text: "Text input",
  },
  construct: (id: string) => ({
    id,
    type: "TextInput",
    attributes: attributes,
  }),
  DesignerComponent: Designer,
  ResponseComponent: Response,
  PropertiesComponent: Properties,
  validate: () => true,
};
