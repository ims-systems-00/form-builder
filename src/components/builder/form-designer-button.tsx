import { useDraggable } from "@dnd-kit/core";
import styled from "styled-components";
import { ColorName, colors } from "../colors";
import { FormElements } from "../form-elements";
import { FormElementInstance } from "../form-elements/types";

export type FormDesignerButtonProps = {
  accent?: ColorName;
  formElement: FormElementInstance;
  className?: string;
};
const ButtonBase = styled.div<{ accent: ColorName }>`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => colors[props.accent as ColorName].lighter};
  color: ${(props) => colors[props.accent as ColorName].base};
  border-radius: 0.75rem;
  cursor: grab;
  margin-bottom: 0.75rem;
  border: ${(props) => colors[props.accent as ColorName].base} 1px solid;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => colors[props.accent as ColorName].base};
    color: ${(props) => colors[props.accent as ColorName].darkest};
    border: ${(props) => colors[props.accent as ColorName].darkest} 1px solid;
  }
`;
const ButtonText = styled.span`
  font-size: 12px;
`;
export function FormDesignerButton({
  formElement,
  accent,
  className,
}: FormDesignerButtonProps) {
  const dragable = useDraggable({
    id: "desinger-btn-" + formElement.type,
    data: {
      type: formElement.type,
      isFormDesignerButtonElement: true,
    },
  });
  const Icon = FormElements[formElement.type].designerButton.icon;
  const text = FormElements[formElement.type].designerButton.text;

  return (
    <ButtonBase
      ref={dragable.setNodeRef}
      accent={accent || "gray"}
      className={className}
      {...dragable.listeners}
      {...dragable.attributes}
    >
      <span className="m-2">
        <Icon size={30} />
      </span>
      <ButtonText>{text}</ButtonText>
    </ButtonBase>
  );
}
export function FormDesignerButtonDragOverLay({
  formElement,
  accent,
  className,
}: FormDesignerButtonProps) {
  const Icon = FormElements[formElement.type].designerButton.icon;
  const text = FormElements[formElement.type].designerButton.text;
  return (
    <ButtonBase accent={accent || "gray"} className={className}>
      <span className="m-2">
        <Icon size={30} />
      </span>
      <ButtonText>{text}</ButtonText>
    </ButtonBase>
  );
}
