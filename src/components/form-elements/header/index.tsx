import { TbHeading } from "react-icons/tb";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Properties } from "./properties";
import { Response } from "./response";
const type: ElementType = "Header";
export const Header: FormElement = {
  type,
  designerButtton: {
    icon: ({ size }: { size?: number }) => <TbHeading size={size} />,
    text: "Header",
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
