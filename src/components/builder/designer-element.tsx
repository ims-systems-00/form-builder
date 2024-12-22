import React from "react";
import classNames from "classnames";
import { ElementType, FormElementInstance } from "../form-elements/types";
import { DrawerOpener, DrawerRight } from "@ims-systems-00/ims-ui-kit";
import { FormElements } from "../form-elements";
import { FormElement } from "../form-elements/types";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoDuplicateOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { useFormBuilder } from "./form-builder/useFormBuilder";
import { DesignerComponentContainer } from "./designer-component-container";
import styled from "styled-components";
export type DesginerElementProps = {
  formElement: FormElementInstance;
};
const ToolButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ElementToolBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  margin: 8px;
  border-radius: 16px;
  display: flex;
  flex-direction: row-reverse;
  &.invisible {
    visibility: hidden;
  }
`;

const DraggingElementCurrentPositionIndicator = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: yellow;
  opacity: 0.75;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DragIntersectionTrackerTop = styled.div`
  position: absolute;
  top: 0;
  height: 50%;
  width: 100%;
`;
const DragIntersectionTrackerBottom = styled.div`
  position: absolute;
  bottom: 0;
  height: 50%;
  width: 100%;
`;
function DesignerElementDropPreview({
  formElement,
}: {
  formElement: FormElement;
}) {
  const Element = formElement;
  return (
    <div className="position-relative">
      <div className="p-2 my-1 rounded-3">
        <Element.DesignerComponent
          formElement={Element.construct("unique-id" + "-drop-preview")}
        />
      </div>
      <div
        className={classNames(
          "position-absolute top-0 h-100 w-100 bg-primary opacity-25 rounded-3 d-flex justify-content-center align-items-center"
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
  // const { isOpen: isHovering, toggle } = useDualStateController();
  const [isHovering, isSetHovering] = React.useState(false);
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
    <React.Fragment>
      {elementPreviewTop}
      <div
        style={{ position: "relative" }}
        onMouseOver={() => isSetHovering(true)}
        onMouseOut={() => isSetHovering(false)}
      >
        <div
          ref={dragable.setNodeRef}
          {...dragable.listeners}
          {...dragable.attributes}
          style={{ position: "relative" }}
        >
          <DragIntersectionTrackerTop
            ref={topHalf.setNodeRef}
            className={classNames({
              // "bg-success opacity-25": topHalf.isOver && !dragable.isDragging,
            })}
          />
          <DragIntersectionTrackerBottom
            ref={bottomHalf.setNodeRef}
            className={classNames({
              // "bg-success opacity-25":
              //   bottomHalf.isOver && !dragable.isDragging,
            })}
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
        <ElementToolBar
          className={classNames({
            " invisible ": !isHovering,
          })}
        >
          <DrawerOpener drawerId={formElement.id}>
            <ToolButton>
              <IoSettingsOutline />
            </ToolButton>
          </DrawerOpener>
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
        <DrawerRight size={27} drawerId={formElement.id}>
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
        </DrawerRight>
      </div>
      {elementPreviewBottom}
    </React.Fragment>
  );
}
