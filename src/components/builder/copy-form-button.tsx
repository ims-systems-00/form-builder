import { useClipboard } from "@ims-systems-00/ims-react-hooks";
import { Button } from "@ims-systems-00/ims-ui-kit";
import { useFormBuilder } from "./form-builder/useFormBuilder";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

export function CopyFormButton({
  children,
  onCopyForm,
}: {
  children: React.ReactNode;
  onCopyForm?: (copiedText: string) => void;
}) {
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
