import React from "react";
import classNames from "classnames";
import { ElementType, FormElementInstance } from "../form-elements/types";
import {
  DrawerContextProvider,
  DrawerOpener,
  DrawerRight,
  Button,
} from "@ims-systems-00/ims-ui-kit";
import { FormElements } from "../form-elements";
import { FormElement } from "../form-elements/types";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoDuplicateOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { useDualStateController } from "@ims-systems-00/ims-react-hooks";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { useFormBuilder } from "./form-builder/useFormBuilder";
export type DesginerElementProps = {
  formElement: FormElementInstance;
};
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
  const { isOpen: isHovering, toggle } = useDualStateController();
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
      <DrawerContextProvider>
        {elementPreviewTop}
        <div
          className="position-relative"
          onMouseOver={() => toggle()}
          onMouseOut={() => toggle()}
        >
          <div
            ref={dragable.setNodeRef}
            {...dragable.listeners}
            {...dragable.attributes}
            className="position-relative"
          >
            <div
              ref={topHalf.setNodeRef}
              className={classNames("position-absolute h-50 w-100 top-0", {
                // "bg-success opacity-25": topHalf.isOver && !dragable.isDragging,
              })}
            ></div>
            <div
              ref={bottomHalf.setNodeRef}
              className={classNames("position-absolute h-50 w-100 bottom-0", {
                // "bg-success opacity-25":
                //   bottomHalf.isOver && !dragable.isDragging,
              })}
            ></div>
            {dragable.isDragging && (
              <div
                className={classNames(
                  "position-absolute top-0 h-100 w-100 bg-warning opacity-25 rounded-3 d-flex justify-content-center align-items-center"
                )}
              >
                <h3>Current Position</h3>
              </div>
            )}
            <div
              className={classNames("desinger-element my-1 rounded-3", {
                hover: isHovering,
              })}
            >
              <DesignerComponent formElement={formElement} />
            </div>
          </div>
          <div
            className={classNames(
              "position-absolute bg-light m-2 rounded-3 top-0 right-0",
              {
                " invisible ": !isHovering,
              }
            )}
          >
            <div className="d-flex flex-row-reverse">
              <DrawerOpener drawerId={formElement.id}>
                <Button size="sm" className="border-0" outline>
                  <IoSettingsOutline />
                </Button>
              </DrawerOpener>
              <Button size="sm" className="border-0" outline>
                <IoDuplicateOutline />
              </Button>
              <Button
                color="danger"
                size="sm"
                className="border-0"
                outline
                onClick={() => {
                  deleteElement({ element: formElement });
                }}
              >
                <RiDeleteBin6Line />
              </Button>
            </div>
            <DrawerRight size={20} drawerId={formElement.id}>
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
        </div>
        {elementPreviewBottom}
      </DrawerContextProvider>
    </React.Fragment>
  );
}
