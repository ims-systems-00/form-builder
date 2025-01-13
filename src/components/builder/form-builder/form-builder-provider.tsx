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
    previousElementId?: string | null;
    nextElementId?: string | null;
  }) => void;
  onElementAttributesSaved?: (event: {
    elementId: string;
    attributes?: Record<string, unknown>;
  }) => void;
  onElementOrderChanged?: (event: {
    element: FormElementInstance;
    previousElementId?: string | null;
    nextElementId?: string | null;
  }) => void;
  onElementRemoved?: (event: {
    element: FormElementInstance;
    previousElementId?: string | null;
    nextElementId?: string | null;
  }) => void;
  googleApiKey?: string;
};

export function FormBuilderProvider({
  children,
  elements,
  googleApiKey,
  onDroppedANewElement,
  onElementOrderChanged,
  onElementRemoved,
  onElementAttributesSaved,
}: FormBuilderProviderProps) {
  const [_elements, setElements] = useState<FormElementInstance[]>([]);
  const _disjoinElementsInTheIndex = useCallback(
    (elements: FormElementInstance[], index: number) => {
      const topList = [...elements.slice(0, index)];
      const bottomList = [...elements.slice(index)];
      let topListLastElement = null;
      let bottomListFirstElement = null;
      if (topList.length > 0) topListLastElement = topList[topList.length - 1];
      if (bottomList.length > 0) bottomListFirstElement = bottomList[0];
      return {
        topList,
        bottomList,
        topListLastElement,
        bottomListFirstElement,
      };
    },
    []
  );
  const addElement = useCallback(
    ({ element, beforeElementId, afterElementId }: AddElementFnParams) => {
      setElements((elements: FormElementInstance[]): FormElementInstance[] => {
        let index = elements.length;
        if (beforeElementId) {
          index = elements.findIndex((e) => e.id === beforeElementId);
          if (index >= 0) {
            const disjointResponse = _disjoinElementsInTheIndex(
              elements,
              index
            );
            if (typeof onDroppedANewElement === "function")
              onDroppedANewElement({
                element,
                previousElementId:
                  disjointResponse?.topListLastElement?.id || null,
                nextElementId:
                  disjointResponse?.bottomListFirstElement?.id || null,
              });
            return (elements = [
              ...disjointResponse.topList,
              element,
              ...disjointResponse.bottomList,
            ]);
          }
        }
        if (afterElementId) {
          index = elements.findIndex((e) => e.id === afterElementId) + 1;
          if (index) {
            if (index > elements.length) index = elements.length;
            const disjointResponse = _disjoinElementsInTheIndex(
              elements,
              index
            );
            if (typeof onDroppedANewElement === "function")
              onDroppedANewElement({
                element,
                previousElementId:
                  disjointResponse?.topListLastElement?.id || null,
                nextElementId:
                  disjointResponse?.bottomListFirstElement?.id || null,
              });
            return (elements = [
              ...elements.slice(0, index),
              element,
              ...elements.slice(index),
            ]);
          }
        }
        if (typeof onDroppedANewElement === "function") {
          let previousElementId = null;
          if (elements.length > 0) {
            previousElementId = elements[elements.length - 1].id;
          }
          onDroppedANewElement({
            element,
            previousElementId: previousElementId,
            nextElementId: null,
          });
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
          targetIndex = elements.findIndex((e) => e.id === afterElementId);

        if (typeof targetIndex === "number") {
          if (targetIndex <= 0) targetIndex = 0;
          if (targetIndex >= elements.length) targetIndex = elements.length - 1;
          const [element] = elements.splice(currentIndex, 1);
          const disjointResponse = _disjoinElementsInTheIndex(
            elements,
            targetIndex
          );
          if (typeof onElementOrderChanged === "function")
            onElementOrderChanged({
              element,
              previousElementId:
                disjointResponse?.topListLastElement?.id || null,
              nextElementId:
                disjointResponse?.bottomListFirstElement?.id || null,
            });
          elements = [
            ...disjointResponse.topList,
            element,
            ...disjointResponse.bottomList,
          ];
        }
        return elements;
      });
    },
    []
  );
  const updateElement = useCallback(
    ({ element }: { element: FormElementInstance }) => {
      if (onElementAttributesSaved)
        onElementAttributesSaved({
          elementId: element.id,
          attributes: element.attributes,
        });
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
      if (typeof onElementRemoved === "function")
        onElementRemoved({
          element,
          previousElementId: null,
          nextElementId: null,
        });
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
