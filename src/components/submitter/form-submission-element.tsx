import { FormElements } from "../form-elements";
import { SubmissionData } from "./context";
import { useFormSubmission } from "./useFormSubmission";
export type FormSubmissionElementProps = {
  submissionData: SubmissionData;
  onResponse: (submissionData: SubmissionData) => void;
};

export function FormSubmissionElement({
  submissionData,
  onResponse,
}: FormSubmissionElementProps) {
  const { onElementResponseUpdated } = useFormSubmission();
  const Element = FormElements[submissionData.element.type];
  return (
    <Element.ResponseComponent
      formElement={submissionData.element}
      onResponse={(_, value) => {
        const data = { element: submissionData.element, responseValue: value };
        onResponse(data);
        onElementResponseUpdated(data);
      }}
    />
  );
}
