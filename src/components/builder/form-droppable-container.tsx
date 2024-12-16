import { useDroppable } from "@dnd-kit/core";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import classNames from "classnames";
import React from "react";
export type FormDroppableContainerProps = {
  children?: React.ReactNode;
};
export function FormDroppableContainer({ children }: FormDroppableContainerProps) {
  const dropable = useDroppable({
    id: "designer-dropable-container",
    data: {
      isDesignerDropArea: true,
    },
  });
  const [setAutoAnimateNode] = useAutoAnimate();
  return (
    <div
      ref={dropable.setNodeRef}
      className={classNames(
        "desginer-dropable-container rounded-3 p-3 bg-light",
        {
          "over ": dropable.isOver,
        }
      )}
    >
      <div  ref={setAutoAnimateNode}>
        {children}
        {dropable.isOver && (
          <div className="bg-primary-light border border-primary rounded-3 py-5 text-center">
            <h4>Drop Elements</h4>
          </div>
        )}
      </div>
    </div>
  );
}
