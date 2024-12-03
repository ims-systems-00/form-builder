import React from "react";
import { DndContext } from "@dnd-kit/core";

const Context = React.createContext(null);
export type DesignProviderProps = {
  children?: React.ReactNode;
};
export function DesignProvider({ children }: DesignProviderProps) {
  return (
    <Context.Provider value={null}>
      <DndContext>{children}</DndContext>
    </Context.Provider>
  );
}
