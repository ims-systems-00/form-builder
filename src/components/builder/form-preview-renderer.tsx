import { FormElements } from "../form-elements";
import { useFormBuilder } from "./form-builder/useFormBuilder";

export function FormPreviewRenderer() {
  const { elements } = useFormBuilder();
  return elements.map((element) => {
    const Element = FormElements[element.type];
    return <Element.ResponseComponent key={element.id} formElement={element} />;
  });
}
