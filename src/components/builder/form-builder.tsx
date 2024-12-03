import React, { useCallback, useContext, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { FormElementInstance } from "../form-elements/types";
type AddElementParams = {
  element: FormElementInstance;
  beforeElement: FormElementInstance;
  afterElement: FormElementInstance;
};

type BuilderUtils = {
  elements: FormElementInstance[];
  addElement: (params: AddElementParams) => void;
  updateElement: (params: { element: FormElementInstance }) => void;
  deleteElement: (params: { element: FormElementInstance }) => void;
};
export const Context = React.createContext<BuilderUtils>({
  elements: [],
  addElement: () => {},
  updateElement: () => {},
  deleteElement: () => {},
});

export type FormBuilderProps = {
  children?: React.ReactNode;
};
export function FormBuilder({ children }: FormBuilderProps) {
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
  return (
    <DndContext>
      <Context.Provider
        value={{ elements, addElement, updateElement, deleteElement }}
      >
        {children}
      </Context.Provider>
    </DndContext>
  );
}
export function useFormBuilder(): BuilderUtils {
  return useContext(Context);
}
