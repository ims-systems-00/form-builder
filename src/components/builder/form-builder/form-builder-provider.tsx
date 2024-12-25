import { DndContext } from "@dnd-kit/core";
import React, { useCallback, useEffect, useState } from "react";
import { FormElementInstance } from "../../form-elements/types";
import { FormDragOverLay } from "../form-drag-overlay";
import { AddElementFnParams, ChangeElementFnParams, Context } from "./context";
import { useGoogle } from "./useGoogle";
export type FormBuilderProviderProps = {
  children?: React.ReactNode;
  elements?: FormElementInstance[];
  onDroppedANewElement?: (event: {
    element: FormElementInstance;
    beforeElementId?: string | null;
    afterElementId?: string | null;
  }) => void;
  onElementAttributesSaved?: (event: {
    elementId: string;
    attributes?: Record<string, unknown>;
    afterElementId?: string | null;
  }) => void;
  onElementOrderChanged?: (event: {
    element: FormElementInstance;
    beforeElementId?: string | null;
    afterElementId?: string | null;
  }) => void;
  onElementRemoved?: (event: {
    element: FormElementInstance;
    beforeElementId?: string | null;
    afterElementId?: string | null;
  }) => void;
  googleApiKey?: string;
};
export function FormBuilderProvider({
  children,
  elements,
  googleApiKey,
}: FormBuilderProviderProps) {
  const [_elements, setElements] = useState<FormElementInstance[]>([]);
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
          targetIndex = elements.findIndex((e) => e.id === beforeElementId) - 1;
        if (afterElementId)
          targetIndex = elements.findIndex((e) => e.id === afterElementId);

        if (targetIndex) {
          if (targetIndex <= 0) targetIndex = 0;
          if (targetIndex >= elements.length) targetIndex = elements.length - 1;
          const [element] = elements.splice(currentIndex, 1);
          // console.log(element, currentIndex, targetIndex);
          elements = [
            ...elements.slice(0, targetIndex),
            element,
            ...elements.slice(targetIndex),
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
  useEffect(() => {
    if (elements) setElements(elements);
  }, [elements]);
  return (
    <DndContext>
      <Context.Provider
        value={{
          elements: _elements,
          addElement,
          updateElement,
          deleteElement,
          changeElementOrder,
          ...useGoogle(googleApiKey),
        }}
      >
        <div className="iforms">{children}</div>
        <FormDragOverLay />
      </Context.Provider>
    </DndContext>
  );
}
