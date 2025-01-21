import React from "react";
import { AnyValidJSObject, FormElementInstance } from "../form-elements/types";

export type SubmissionData = {
  element: FormElementInstance;
  responseValue: AnyValidJSObject;
};
export type SubmitterUtils = {
  submissionData: SubmissionData[];
  onSubmit: () => void;
  onElementResponseUpdated: (submissionData: SubmissionData) => void;
};
export const Context = React.createContext<SubmitterUtils>({
  submissionData: [],
  onSubmit: () => {},
  onElementResponseUpdated: () => {},
});
