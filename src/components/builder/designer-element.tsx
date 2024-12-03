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
export type DesginerElementProps = {
  formElement: FormElementInstance;
};
export function DesginerElement({ formElement }: DesginerElementProps) {
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
      isBttomHalfDesignerElement: true,
    },
  });
  const dragable = useDraggable({
    id: "desinger-element-" + formElement.type,
    data: {
      type: formElement.type,
      isDesignerElement: true,
    },
  });
  let elementPreviewTop = null;
  let elementPreviewBottom = null;

  if (topHalf.isOver) {
    const type = bottomHalf.active?.data?.current?.type as ElementType;
    const Element = FormElements[type];
    elementPreviewTop = (
      <div className="opacity-25 p-2 my-1 rounded-3">
        <Element.DesignerComponent
          formElement={Element.construct(formElement.id + "-top-drop-preview")}
        />
      </div>
    );
  }
  if (bottomHalf.isOver) {
    const type = bottomHalf.active?.data?.current?.type as ElementType;
    const Element = FormElements[type];
    elementPreviewBottom = (
      <div className="opacity-25 p-2 my-1 rounded-3">
        <Element.DesignerComponent
          formElement={Element.construct(
            formElement.id + "-bottom-drop-preview"
          )}
        />
      </div>
    );
  }
  return (
    <React.Fragment>
      {elementPreviewTop}
      <div
        ref={dragable.setNodeRef}
        {...dragable.listeners}
        {...dragable.attributes}
        onMouseOver={() => toggle()}
        onMouseOut={() => toggle()}
      >
        <DrawerContextProvider>
          <div className="position-relative">
            <div
              ref={topHalf.setNodeRef}
              className={classNames("position-absolute h-50 w-100 top-0", {
                "bg-success opacity-25": topHalf.isOver,
              })}
            ></div>
            <div
              ref={bottomHalf.setNodeRef}
              className={classNames("position-absolute h-50 w-100 bottom-0", {
                "bg-danger  opacity-25": bottomHalf.isOver,
              })}
            ></div>
            <div
              className={classNames("desinger-element my-1 rounded-3", {
                hover: isHovering,
              })}
            >
              <DesignerComponent formElement={formElement} />
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
                <Button size="sm" className="border-0" outline>
                  <RiDeleteBin6Line />
                </Button>
              </div>
              <DrawerRight size={20} drawerId={formElement.id}>
                <PropertiesComponent
                  formElement={formElement}
                  onAttributeSave={() => {}}
                />
              </DrawerRight>
            </div>
          </div>
        </DrawerContextProvider>
      </div>
      {elementPreviewBottom}
    </React.Fragment>
  );
}
