import { useDroppable } from "@dnd-kit/core";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import classNames from "classnames";
export type DropableContainerProps = {
  children?: React.ReactNode;
};
export function DropableContainer({ children }: DropableContainerProps) {
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
      <div ref={setAutoAnimateNode}>
        {dropable.isOver && (
          <div className="rounded-3 bg-primary-light py-5 text-center">
            <h4>Drop Elements</h4>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
