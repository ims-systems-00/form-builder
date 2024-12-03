import { useContext } from "react";
import { BuilderUtils, Context } from "./context";
export function useFormBuilder(): BuilderUtils {
  return useContext(Context);
}
