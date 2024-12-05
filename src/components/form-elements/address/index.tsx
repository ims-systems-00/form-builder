import { FaRegAddressBook } from "react-icons/fa";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Response } from "./response";
import { Properties } from "./properties";
export {} from "./types";
const type: ElementType = "Address";
export const Address: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <FaRegAddressBook size={size} />,
    text: "Address",
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
