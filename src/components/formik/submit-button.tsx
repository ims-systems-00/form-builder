import React, { cloneElement } from "react";
import { useFormikContext } from "formik";

interface SubmitButtonProps {
  children: React.ReactElement;
  isSubmitting?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  isSubmitting = false,
}) => {
  const { handleSubmit, isValid, dirty } = useFormikContext();

  // Clone the children element and attach the formik handleSubmit function to the onClick
  return cloneElement(children, {
    type: "submit",
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
      if (typeof children.props.onClick === "function") {
        children.props.onClick(event);
      }
      handleSubmit();
    },
    disabled: isSubmitting || !dirty || !isValid,
  });
};
