import { useDraggable } from "@dnd-kit/core";
import { FormElementInstance } from "../form-elements/types";
import { FormElements } from "../form-elements";
// function Square({ icon, text }: DesingerButtonType) {
//   const dragganble = useDraggable({
//     id: "desinger-btn-" + text,
//     data: {
//       isDesignerButtonElement: true,
//     },
//   });
//   const Icon = icon;
//   return (
//     <div
//       ref={dragganble.setNodeRef}
//       className="designer-button-square"
//       {...dragganble.listeners}
//       {...dragganble.attributes}
//     >
//       <span className="m-2">
//         <Icon size={30} />
//       </span>
//       <span>{text}</span>
//     </div>
//   );
// }
export type DesingerButtonProps = {
  shape?: "square" | "rectangle";
  formElement: FormElementInstance;
};
export function DesingerButton({ formElement }: DesingerButtonProps) {
  const dragganble = useDraggable({
    id: "desinger-btn-" + formElement.type,
    data: {
      type: formElement.type,
      isDesignerButtonElement: true,
    },
  });
  const Icon = FormElements[formElement.type].designerButtton.icon;
  const text = FormElements[formElement.type].designerButtton.text;

  return (
    <div
      ref={dragganble.setNodeRef}
      className="designer-button-square"
      {...dragganble.listeners}
      {...dragganble.attributes}
    >
      <span className="m-2">
        <Icon size={30} />
      </span>
      <span>{text}</span>
    </div>
  );
}
export function DesingerButtonDragOverLay({
  formElement,
}: DesingerButtonProps) {
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
