import {
  Active,
  DragOverlay as DndKitDragOverLay,
  useDndMonitor,
} from "@dnd-kit/core";
import { DesingerButtonDragOverLay } from "./designer-button";
import { useState } from "react";
import { FormElements } from "../form-elements";
import { ElementType } from "../form-elements/types";
import { useFormBuilder } from "./form-builder/useFormBuilder";
import { v6 as uuid } from "uuid";
export function DragOverLay() {
  const { addElement, changeElementOrder } = useFormBuilder();
  const [draggedItem, setDraggeditem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (e) => {
      setDraggeditem(e.active);
    },
    onDragEnd: (e) => {
      setDraggeditem(null);
      const isADesignerButtonDroppedOnDesignerDropArea =
        e.over?.data?.current?.isDesignerDropArea &&
        e.active.data.current?.isDesignerButtonElement;
      if (isADesignerButtonDroppedOnDesignerDropArea) {
        const type = e.active.data.current?.type as ElementType;
        return addElement({
          element: FormElements[type].construct(uuid()),
        });
      }
      const isADesignerButtonDroppedOnADesignerElementTopHalf =
        e.over?.data?.current?.isTopHalfDesignerElement &&
        e.active.data.current?.isDesignerButtonElement;
      if (isADesignerButtonDroppedOnADesignerElementTopHalf) {
        const type = e.active.data.current?.type as ElementType;
        addElement({
          element: FormElements[type].construct(uuid()),
          beforeElementId: e.over?.data?.current?.elementId,
        });
      }
      const isADesignerButtonDroppedOnADesignerElementBottomHalf =
        e.over?.data?.current?.isBottomHalfDesignerElement &&
        e.active.data.current?.isDesignerButtonElement;
      if (isADesignerButtonDroppedOnADesignerElementBottomHalf) {
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
  const isDesignerButtonElement =
    draggedItem?.data?.current?.isDesignerButtonElement;
  if (isDesignerButtonElement) {
    const type = draggedItem?.data?.current?.type as ElementType;
    node = (
      <DesingerButtonDragOverLay
        formElement={FormElements[type].construct(draggedItem.id.toString())}
      />
    );
  }
  const isDesignerElement = draggedItem?.data?.current?.isDesignerElement;
  if (isDesignerElement) {
    const type = draggedItem?.data?.current?.type as ElementType;
    const FormElement = FormElements[type];
    node = (
      <div className="desinger-element my-1 rounded-3 bg-light">
        <FormElement.DesignerComponent
          formElement={FormElement.construct(draggedItem.id.toString())}
        />
      </div>
    );
  }
  return <DndKitDragOverLay>{node}</DndKitDragOverLay>;
}
