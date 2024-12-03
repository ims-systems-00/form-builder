import { useCallback, useState } from "react";
import { FormElementInstance } from "../../form-elements/types";
import { AddElementParams, BuilderUtils } from "./Context";
export function useStore(): BuilderUtils {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const addElement = useCallback(
    ({ element, beforeElement, afterElement }: AddElementParams) => {
      setElements((elements: FormElementInstance[]): FormElementInstance[] => {
        let index = elements.length;
        if (beforeElement) {
          index = elements.findIndex((e) => e.id === beforeElement.id);
          if (index)
            elements = [
              ...elements.slice(0, index),
              element,
              ...elements.slice(index),
            ];
        }
        if (afterElement) {
          index = elements.findIndex((e) => e.id === afterElement.id) + 1;
          if (index)
            elements = [
              ...elements.slice(0, index),
              element,
              ...elements.slice(index),
            ];
        }
        return elements;
      });
    },
    []
  );
  const updateElement = useCallback(
    ({ element }: { element: FormElementInstance }) => {
      setElements((elements: FormElementInstance[]): FormElementInstance[] => {
        return elements.map((e) => {
          if (e.id === element.id) return element;
          return e;
        });
      });
    },
    []
  );
  const deleteElement = useCallback(
    ({ element }: { element: FormElementInstance }) => {
      setElements((elements: FormElementInstance[]): FormElementInstance[] => {
        return elements.filter((e) => {
          return e.id !== element.id;
        });
      });
    },
    []
  );
  return {
    elements,
    addElement,
    updateElement,
    deleteElement,
  };
}
