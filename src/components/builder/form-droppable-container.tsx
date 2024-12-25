import { useDroppable } from "@dnd-kit/core";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import classNames from "classnames";
import React from "react";
import styled from "styled-components";
export type FormDroppableContainerProps = {
  children?: React.ReactNode;
};
const Container = styled.div`
  border: transparent 1px solid;
  transition: all 0.3s ease;
  min-height: 80vh;
  border-radius: 16px;
  padding: 12px;
  &.over {
    border: transparent 1px solid;
  }
`;
export function FormDroppableContainer({
  children,
}: FormDroppableContainerProps) {
  const dropable = useDroppable({
    id: "designer-dropable-container",
    data: {
      isDesignerDropArea: true,
    },
  });
  const [setAutoAnimateNode] = useAutoAnimate();
  return (
    <Container
      ref={dropable.setNodeRef}
      className={classNames({
        "over ": dropable.isOver,
      })}
    >
      <div ref={setAutoAnimateNode}>
        {children}
        {dropable.isOver && (
          <div className="bg-indigo-200 border border-indigo-700 rounded-lg py-5 text-center">
            <h4>Drop Elements</h4>
          </div>
        )}
      </div>
    </Container>
  );
}
