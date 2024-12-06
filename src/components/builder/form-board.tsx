import React from "react";

export type FormBoardProps = {
  children?: React.ReactNode;
};
export function FormBoard({ children }: FormBoardProps) {
  return <div className="form-board">{children}</div>;
}
