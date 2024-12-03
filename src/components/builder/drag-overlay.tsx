import {
  Active,
  DragOverlay as DndKitDragOverLay,
  useDndMonitor,
} from "@dnd-kit/core";
import { DesingerButtonDragOverLay } from "./designer-button";
import { useState } from "react";
import { FormElements } from "../form-elements";
import { ElementType } from "../form-elements/types";
export function DragOverLay() {
  const [draggedItem, setDraggeditem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (e) => {
      setDraggeditem(e.active);
    },
    onDragEnd: () => setDraggeditem(null),
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
