import React, { useCallback, useEffect } from "react";
import { Context, SubmissionData } from "./context";
export type FormSubmissionProviderProps = {
  children?: React.ReactNode;
  submissionData: SubmissionData[];
  onSubmit: (submissionData: SubmissionData[]) => void;
};

export function FormSubmissionProvider({
  children,
  submissionData,
  onSubmit,
}: FormSubmissionProviderProps) {
  const [_submissionData, setSubmissionData] =
    React.useState<SubmissionData[]>(submissionData);
  const handleSubmission = useCallback(() => {
    onSubmit(_submissionData);
  }, [_submissionData, onSubmit]);
  const handleElementResponseUpdated = useCallback(
    (submissionData: SubmissionData) => {
      setSubmissionData((sd) => {
        return sd.map((data) => {
          if (data.element.id === submissionData.element.id) {
            return submissionData;
          }
          return data;
        });
      });
    },
    []
  );
  useEffect(()=>{
    setSubmissionData(submissionData)
  },[submissionData])
  return (
    <Context.Provider
      value={{
        submissionData: _submissionData,
        onSubmit: handleSubmission,
        onElementResponseUpdated: handleElementResponseUpdated,
      }}
    >
      {children}
    </Context.Provider>
  );
}
