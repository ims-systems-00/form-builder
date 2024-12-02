import React from "react";
import classNames from "classnames";
import { FormElementInstance } from "../form-elements/types";
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
export type DesginerElementProps = {
  formElement: FormElementInstance;
};
export function DesginerElement({ formElement }: DesginerElementProps) {
  const Element = FormElements[formElement.type] as FormElement;
  const DesignerComponent = Element.DesignerComponent;
  const PropertiesComponent = Element.PropertiesComponent;
  const { isOpen: isHovering, toggle } = useDualStateController();
  return (
    <DrawerContextProvider>
      <div
        className={classNames("desinger-element my-1 rounded-3", {
          hover: isHovering,
        })}
        onMouseOver={() => toggle()}
        onMouseOut={() => toggle()}
      >
        <DesignerComponent formElement={formElement} />
        <div className={classNames({ " invisible ": !isHovering })}>
          <hr className="my-1 bg-secondary" style={{ height: 2 }} />
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
  );
}
