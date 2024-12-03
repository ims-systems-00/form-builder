import React from "react";
import { DndContext } from "@dnd-kit/core";

export type FormBuilderProps = {
  children?: React.ReactNode;
};
export function FormBuilder({ children }: FormBuilderProps) {
  return <DndContext>{children}</DndContext>;
}
