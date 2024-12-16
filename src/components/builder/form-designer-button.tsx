import { useDraggable } from "@dnd-kit/core";
import { FormElementInstance } from "../form-elements/types";
import { FormElements } from "../form-elements";
import React from "react";
// function Square({ icon, text }: FormDesignerButtonType) {
//   const dragable = useDraggable({
//     id: "desinger-btn-" + text,
//     data: {
//       isFormDesignerButtonElement: true,
//     },
//   });
//   const Icon = icon;
//   return (
//     <div
//       ref={dragable.setNodeRef}
//       className="designer-button-square"
//       {...dragable.listeners}
//       {...dragable.attributes}
//     >
//       <span className="m-2">
//         <Icon size={30} />
//       </span>
//       <span>{text}</span>
//     </div>
//   );
// }
export type FormDesignerButtonProps = {
  shape?: "square" | "rectangle";
  formElement: FormElementInstance;
};
export function FormDesignerButton({ formElement }: FormDesignerButtonProps) {
  const dragable = useDraggable({
    id: "desinger-btn-" + formElement.type,
    data: {
      type: formElement.type,
      isFormDesignerButtonElement: true,
    },
  });
  const Icon = FormElements[formElement.type].designerButtton.icon;
  const text = FormElements[formElement.type].designerButtton.text;

  return (
    <div
      ref={dragable.setNodeRef}
      className="designer-button-square"
      {...dragable.listeners}
      {...dragable.attributes}
    >
      <span className="m-2">
        <Icon size={30} />
      </span>
      <span>{text}</span>
    </div>
  );
}
export function FormDesignerButtonDragOverLay({
  formElement,
}: FormDesignerButtonProps) {
  const Icon = FormElements[formElement.type].designerButtton.icon;
  const text = FormElements[formElement.type].designerButtton.text;
  return (
    <div className="designer-button-square">
      <span className="m-2">
        <Icon size={30} />
      </span>
      <span>{text}</span>
    </div>
  );
}
