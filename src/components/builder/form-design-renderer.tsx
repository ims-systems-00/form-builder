import { DesginerElement } from "./designer-element";
import { useFormBuilder } from "./form-builder/useFormBuilder";

export function FormDesignRenderer() {
  const { elements } = useFormBuilder();
  return elements.map((element) => {
    return <DesginerElement key={element.id} formElement={element} />;
  });
}
