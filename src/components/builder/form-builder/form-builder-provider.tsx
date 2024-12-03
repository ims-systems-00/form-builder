import { useCallback, useState } from "react";
import { FormElementInstance } from "../../form-elements/types";
import { AddElementFnParams, Context, ChangeElementFnParams } from "./context";
import { DndContext } from "@dnd-kit/core";

export type FormBuilderProviderProps = {
  children?: React.ReactNode;
};
export function FormBuilderProvider({ children }: FormBuilderProviderProps) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const addElement = useCallback(
    ({ element, beforeElementId, afterElementId }: AddElementFnParams) => {
      setElements((elements: FormElementInstance[]): FormElementInstance[] => {
        let index = elements.length;
        if (beforeElementId) {
          index = elements.findIndex((e) => e.id === beforeElementId);
          if (index)
            return (elements = [
              ...elements.slice(0, index),
              element,
              ...elements.slice(index),
            ]);
        }
        if (afterElementId) {
          index = elements.findIndex((e) => e.id === afterElementId) + 1;
          if (index) {
            if (index > elements.length) index = elements.length;
            return (elements = [
              ...elements.slice(0, index),
              element,
              ...elements.slice(index),
            ]);
          }
        }
        return (elements = [...elements, element]);
      });
    },
    []
  );
  const changeElementOrder = useCallback(
    ({ elementId, beforeElementId, afterElementId }: ChangeElementFnParams) => {
      setElements((elements: FormElementInstance[]): FormElementInstance[] => {
        const currentIndex = elements.findIndex((e) => e.id === elementId);
        const element = elements.find((e) => e.id === elementId);
        if (!element) return elements;
        let targetIndex = null;
        if (beforeElementId)
          targetIndex = elements.findIndex((e) => e.id === beforeElementId);
        if (afterElementId)
          targetIndex = elements.findIndex((e) => e.id === afterElementId) + 1;

        if (targetIndex) {
          console.log(currentIndex, targetIndex);
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
  return (
    <DndContext>
      <Context.Provider
        value={{
          elements,
          addElement,
          updateElement,
          deleteElement,
          changeElementOrder,
        }}
      >
        {children}
      </Context.Provider>
    </DndContext>
  );
}
