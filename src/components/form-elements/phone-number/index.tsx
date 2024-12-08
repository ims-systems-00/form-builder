import { LuPhone } from "react-icons/lu";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Properties } from "./properties";
import { Response } from "./reponse";
export {} from "./types";
const type: ElementType = "PhoneNumber";
export const PhoneNumber: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <LuPhone size={size} />,
    text: "Phone Number",
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
