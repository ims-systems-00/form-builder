import { VscSymbolNumeric } from "react-icons/vsc";
import { FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./reponse";
import { Properties } from "./properties";
export {} from "./types";
export const NumberInput: FormElement = {
  type: "NumberInput",
  designerButtton: {
    icon: <VscSymbolNumeric />,
    text: "Number input",
  },
  construct: (id: string) => ({
    id,
    type: "NumberInput",
    attributes: attributes,
  }),
  DesignerComponent: Designer,
  ResponseComponent: Response,
  PropertiesComponent: Properties,
  validate: () => true,
};
