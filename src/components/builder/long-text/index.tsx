import React from "react";
import { FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./response";
import { Properties } from "./properties";
export {} from "./types";
export const LongText: FormElement = {
  type: "LongText",
  designerButtton: {
    icon: <React.Fragment>L</React.Fragment>,
    text: "Long Text",
  },
  construct: (id: string) => ({
    id,
    type: "LongText",
    attributes: attributes,
  }),

  DesignerComponent: Designer,
  ResponseComponent: Response,
  PropertiesComponent: Properties,
  validate: () => true,
};
