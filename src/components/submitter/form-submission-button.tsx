import React from "react";
import { useFormSubmission } from "./useFormSubmission";
import { Button } from "../ui/button";

export type FormSubmitterWrapperProps = {
  children?: React.ReactNode;
};

export function FormSubmissionButton({ children }: FormSubmitterWrapperProps) {
  const { onSubmit } = useFormSubmission();
  return <Button type="button" onClick={onSubmit}>{children}</Button>;
}
