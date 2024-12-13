import { HiSelector } from "react-icons/hi";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Properties } from "./properties";
import { Response } from "./reponse";
export { } from "./types";
const type: ElementType = "DropDown";
export const DropDown: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <HiSelector size={size} />,
    text: "DropDown",
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
