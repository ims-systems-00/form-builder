import {
  AnyValidJSObject,
  FormElementInstance,
} from "@/components/form-elements/types";

export const handleTextChange = (
  element: FormElementInstance,
  response: AnyValidJSObject
) => {
  if (element.type === "TextInput") {
    console.log("TextInput", element, response);
  }
};
export const handleNumberChange = (
    element: FormElementInstance,
    response: AnyValidJSObject
  ) => {
    if (element.type !== "TextInput") {
      console.log("Number", element, response);
    }
  };
  
export const handlers = {
    TextInput: handleTextChange,
    Number: handleNumberChange,
}