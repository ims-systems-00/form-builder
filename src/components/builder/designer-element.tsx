import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import classNames from "classnames";
import { ElementType, FormElementInstance } from "../form-elements/types";

import { useDraggable, useDroppable } from "@dnd-kit/core";
import React, { useState } from "react";
import { IoDuplicateOutline, IoSettingsOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FormElements } from "../form-elements";
import { FormElement } from "../form-elements/types";
import { DesignerComponentContainer } from "./designer-component-container";
import { useFormBuilder } from "./form-builder/useFormBuilder";
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";
export type DesginerElementProps = {
  formElement: FormElementInstance;
};

const ToolButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button variant={"ghost"} size={"icon"} ref={ref} {...props}>
        {children}
      </Button>
    );
  }
);
export interface ElementToolBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  invisible?: boolean;
}
const ElementToolBar = React.forwardRef<HTMLDivElement, ElementToolBarProps>(
  (props, ref) => (
    <div
      {...props}
      ref={ref}
      className={cn(
        "absolute top-0 right-0 bg-white m-2 rounded-lg flex flex-row-reverse",
        props.className,
        { invisible: props.invisible }
      )}
    >
      {props.children}
    </div>
  )
);

const DraggingElementCurrentPositionIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    ref={ref}
    className="absolute top-0 h-full w-full bg-yellow-200 opacity-75 rounded-lg flex justify-center items-center"
    {...props}
  >
    {props.children}
  </div>
));
const DragIntersectionTrackerTop = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn("absolute top-0 h-1/2 w-full", props.className)}
  >
    {props.children}
  </div>
));

const DragIntersectionTrackerBottom = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn("absolute bottom-0 h-1/2 w-full", props.className)}
  >
    {props.children}
  </div>
));
function DesignerElementDropPreview({
  formElement,
}: {
  formElement: FormElement;
}) {
  const Element = formElement;
  return (
    <div className="relative">
      <div className="p-2 my-1 rounded-lg">
        <Element.DesignerComponent
          formElement={Element.construct("unique-id" + "-drop-preview")}
        />
      </div>
      <div
        className={classNames(
          "absolute top-0 h-full w-full bg-teal-100 opacity-75 rounded-lg flex justify-center items-center"
        )}
      >
        <h3>Drop Preview</h3>
      </div>
    </div>
  );
}
export function DesginerElement({ formElement }: DesginerElementProps) {
  const { updateElement, deleteElement } = useFormBuilder();
  const Element = FormElements[formElement.type] as FormElement;
  const DesignerComponent = Element.DesignerComponent;
  const PropertiesComponent = Element.PropertiesComponent;
  const [isHovering, isSetHovering] = useState(false);
  const topHalf = useDroppable({
    id: formElement.id + "-top-drop",
    data: {
      type: formElement.type,
      elementId: formElement.id,
      isTopHalfDesignerElement: true,
    },
  });
  const bottomHalf = useDroppable({
    id: formElement.id + "-bottom-drop",
    data: {
      type: formElement.type,
      elementId: formElement.id,
      isBottomHalfDesignerElement: true,
    },
  });
  const dragable = useDraggable({
    id: "desinger-element-" + formElement.id,
    data: {
      type: formElement.type,
      elementId: formElement.id,
      isDesignerElement: true,
    },
  });
  let elementPreviewTop = null;
  let elementPreviewBottom = null;

  if (topHalf.isOver) {
    const type = topHalf.active?.data?.current?.type as ElementType;
    const Element = FormElements[type];
    elementPreviewTop = <DesignerElementDropPreview formElement={Element} />;
  }
  if (bottomHalf.isOver) {
    const type = bottomHalf.active?.data?.current?.type as ElementType;
    const Element = FormElements[type];
    elementPreviewBottom = <DesignerElementDropPreview formElement={Element} />;
  }

  return (
    <Sheet>
      {elementPreviewTop}
      <div
        className="relative"
        onMouseOver={() => isSetHovering(true)}
        onMouseOut={() => isSetHovering(false)}
      >
        <div
          ref={dragable.setNodeRef}
          {...dragable.listeners}
          {...dragable.attributes}
          className="relative"
        >
          <DragIntersectionTrackerTop
            ref={topHalf.setNodeRef}
            // "bg-success opacity-25": topHalf.isOver && !dragable.isDragging,
          />
          <DragIntersectionTrackerBottom
            ref={bottomHalf.setNodeRef}
            // "bg-success opacity-25": bottomHalf.isOver && !dragable.isDragging,
          />
          {dragable.isDragging && (
            <DraggingElementCurrentPositionIndicator>
              <h3>Current Position</h3>
            </DraggingElementCurrentPositionIndicator>
          )}
          <DesignerComponentContainer>
            <DesignerComponent formElement={formElement} />
          </DesignerComponentContainer>
        </div>
        <ElementToolBar invisible={!isHovering}>
          <SheetTrigger asChild>
            <ToolButton>
              <IoSettingsOutline />
            </ToolButton>
          </SheetTrigger>

          <ToolButton>
            <IoDuplicateOutline />
          </ToolButton>
          <ToolButton
            onClick={() => {
              deleteElement({ element: formElement });
            }}
          >
            <RiDeleteBin6Line />
          </ToolButton>
        </ElementToolBar>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Element properties</SheetTitle>
            <SheetDescription>
              <PropertiesComponent
                formElement={formElement}
                onAttributeSave={(_, attributes) => {
                  updateElement({
                    element: {
                      ...formElement,
                      attributes,
                    },
                  });
                }}
              />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </div>
      {elementPreviewBottom}
    </Sheet>
  );
}
