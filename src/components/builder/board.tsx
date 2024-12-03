import React from "react";

export type FormBuilderBoardProps = {
  children?: React.ReactNode;
};
export function FormBuilderBoard({ children }: FormBuilderBoardProps) {
  return <div className="form-board">{children}</div>;
}
