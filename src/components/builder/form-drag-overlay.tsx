import {
  Active,
  DragOverlay as DndKitDragOverLay,
  useDndMonitor,
} from "@dnd-kit/core";
import { FormDesignerButtonDragOverLay } from "./form-designer-button";
import React, { useState } from "react";
import { FormElements } from "../form-elements";
import { ElementType } from "../form-elements/types";
import { useFormBuilder } from "./form-builder/useFormBuilder";
import { v6 as uuid } from "uuid";
import { DesignerComponentContainer } from "./designer-component-container";
export function FormDragOverLay() {
  const { addElement, changeElementOrder } = useFormBuilder();
  const [draggedItem, setDraggeditem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (e) => {
      setDraggeditem(e.active);
    },
    onDragEnd: (e) => {
      setDraggeditem(null);
      const isAFormDesignerButtonDroppedOnDesignerDropArea =
        e.over?.data?.current?.isDesignerDropArea &&
        e.active.data.current?.isFormDesignerButtonElement;
      if (isAFormDesignerButtonDroppedOnDesignerDropArea) {
        const type = e.active.data.current?.type as ElementType;
        return addElement({
          element: FormElements[type].construct(uuid()),
        });
      }
      const isAFormDesignerButtonDroppedOnADesignerElementTopHalf =
        e.over?.data?.current?.isTopHalfDesignerElement &&
        e.active.data.current?.isFormDesignerButtonElement;
      if (isAFormDesignerButtonDroppedOnADesignerElementTopHalf) {
        const type = e.active.data.current?.type as ElementType;
        addElement({
          element: FormElements[type].construct(uuid()),
          beforeElementId: e.over?.data?.current?.elementId,
        });
      }
      const isAFormDesignerButtonDroppedOnADesignerElementBottomHalf =
        e.over?.data?.current?.isBottomHalfDesignerElement &&
        e.active.data.current?.isFormDesignerButtonElement;
      if (isAFormDesignerButtonDroppedOnADesignerElementBottomHalf) {
        const type = e.active.data.current?.type as ElementType;
        addElement({
          element: FormElements[type].construct(uuid()),
          afterElementId: e.over?.data?.current?.elementId,
        });
      }
      const isADesignerElementDroppedOnADesignerElementTopHalf =
        e.over?.data?.current?.isTopHalfDesignerElement &&
        e.active.data.current?.isDesignerElement;
      if (isADesignerElementDroppedOnADesignerElementTopHalf)
        changeElementOrder({
          elementId: e.active.data.current?.elementId,
          beforeElementId: e.over?.data?.current?.elementId,
        });
      const isADesignerElementDroppedOnADesignerElementBottomHalf =
        e.over?.data?.current?.isBottomHalfDesignerElement &&
        e.active.data.current?.isDesignerElement;
      if (isADesignerElementDroppedOnADesignerElementBottomHalf)
        changeElementOrder({
          elementId: e.active.data.current?.elementId,
          afterElementId: e.over?.data?.current?.elementId,
        });
    },
  });

  let node = <span>No Drag OverLay</span>;
  const isFormDesignerButtonElement =
    draggedItem?.data?.current?.isFormDesignerButtonElement;
  if (isFormDesignerButtonElement) {
    const type = draggedItem?.data?.current?.type as ElementType;
    node = (
      <FormDesignerButtonDragOverLay
        formElement={FormElements[type].construct(draggedItem.id.toString())}
      />
    );
  }
  const isDesignerElement = draggedItem?.data?.current?.isDesignerElement;
  if (isDesignerElement) {
    const type = draggedItem?.data?.current?.type as ElementType;
    const FormElement = FormElements[type];
    node = (
      <DesignerComponentContainer>
        <FormElement.DesignerComponent
          formElement={FormElement.construct(draggedItem.id.toString())}
        />
      </DesignerComponentContainer>
    );
  }
  return <DndKitDragOverLay>{node}</DndKitDragOverLay>;
}
