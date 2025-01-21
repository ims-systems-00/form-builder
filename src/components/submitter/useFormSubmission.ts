import { useContext } from "react";
import { SubmitterUtils, Context } from "./context";
export function useFormSubmission(): SubmitterUtils {
  return useContext(Context);
}
