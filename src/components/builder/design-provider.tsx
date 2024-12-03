import React from "react";

const Context = React.createContext(null);
export type DesignProviderProps = {
  children?: React.ReactNode;
};
export function DesignProvider({ children }: DesignProviderProps) {
  return <Context.Provider value={null}>{children}</Context.Provider>;
}
