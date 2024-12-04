import { CiLocationOn } from "react-icons/ci";
import { FormElement, ElementType } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./reponse";
import { Properties } from "./properties";
export {} from "./types";
const type: ElementType = "Location";

export const Location: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <CiLocationOn size={size} />,
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
