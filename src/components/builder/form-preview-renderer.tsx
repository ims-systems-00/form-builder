import { Button } from "@/components/ui/button";
import { FormElements } from "../form-elements";
import { useFormBuilder } from "./form-builder/useFormBuilder";
import React from "react";
import { TbSend } from "react-icons/tb";

export function FormPreviewRenderer() {
  const { elements } = useFormBuilder();
  return (
    <React.Fragment>
      <form className="space-y-8">
        {elements.map((element) => {
          const Element = FormElements[element.type];
          return (
            <Element.ResponseComponent key={element.id} formElement={element} />
          );
        })}
        <Button type="submit">
          Submit response <TbSend />
        </Button>
      </form>
    </React.Fragment>
  );
}
