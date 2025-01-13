import { LuTextCursorInput } from "react-icons/lu";
import { ElementType, FormElement } from "../types";
import { attributes } from "./attributes";
import { Designer } from "./designer";
import { Properties } from "./properties";
import { Response } from "./response";

const type: ElementType = "TextInput";
export const TextInput: FormElement = {
  type,
  designerButton: {
    icon: ({ size }: { size?: number }) => <LuTextCursorInput size={size} />,
    text: "Text input",
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
