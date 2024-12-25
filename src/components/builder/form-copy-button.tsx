import { useClipboard } from "@ims-systems-00/ims-react-hooks";
import { Button } from "@/components/ui/button";
import { useFormBuilder } from "./form-builder/useFormBuilder";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
export type FormCopyButtonProps = {
  children: React.ReactNode;
  onCopyForm?: (copiedText: string) => void;
};
export function FormCopyButton({ children, onCopyForm }: FormCopyButtonProps) {
  const { elements } = useFormBuilder();
  const { copyPlainTextToClipboard, copySuccess } = useClipboard();
  return (
    <Button
      size="sm"
      onClick={() => {
        const textToBeCopied = JSON.stringify({ elements });
        copyPlainTextToClipboard(textToBeCopied);
        if (typeof onCopyForm === "function") onCopyForm(textToBeCopied);
      }}
    >
      {copySuccess ? <FaRegCircleCheck /> : children}
    </Button>
  );
}
