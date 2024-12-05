import { Button } from "@ims-systems-00/ims-ui-kit";
import { FormElements } from "../form-elements";
import { useFormBuilder } from "./form-builder/useFormBuilder";
import React from "react";
import { TbSend } from "react-icons/tb";

export function FormPreviewRenderer() {
  const { elements } = useFormBuilder();
  return (
    <React.Fragment>
      {elements.map((element) => {
        const Element = FormElements[element.type];
        return (
          <Element.ResponseComponent key={element.id} formElement={element} />
        );
      })}
      <Button color="primary" className="pull-right">
        Submit response <TbSend />
      </Button>
    </React.Fragment>
  );
}
