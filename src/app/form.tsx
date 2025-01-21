import { FormSubmissionButton } from "@/components/submitter/form-submission-button";
import { FormSubmissionElement } from "@/components/submitter/form-submission-element";
import { FormSubmissionProvider } from "@/components/submitter/form-submission-provider";
import { useState } from "react";
import { TbSend } from "react-icons/tb";
import { FormElements } from "../components";
import { FormBoard } from "../components/builder/form-board";
import { FormBuilderProvider } from "../components/builder/form-builder/form-builder-provider";
import { FormDesignRenderer } from "../components/builder/form-design-renderer";
import { FormDesignerButton } from "../components/builder/form-designer-button";
import { FormDroppableContainer } from "../components/builder/form-droppable-container";
import { FormPreviewRenderer } from "../components/builder/form-preview-renderer";
import { FormElementInstance } from "../components/form-elements/types";
// import { handlers } from "./responseControler";

export function Form() {
  const [formElements] = useState<FormElementInstance[]>([
    {
      id: "1efc1d82-66cb-6590-ae4e-45d64207ea1b",
      type: "TextInput",
      attributes: {
        label: "Full Name",
        placeholder: "Enter your full name",
        subLabel: "Please provide your legal name as it appears on ID.",
        required: true,
      },
    },
    {
      id: "1efc1d82-66cb-6590-ae4e-12d64207ea1b",
      type: "TextInput",
      attributes: {
        label: "Full Name",
        placeholder: "Enter your full name",
        subLabel: "Please provide your legal name as it appears on ID.",
        required: true,
      },
    },
    {
      id: "1efc1d82-66cb-6590-ae4e-bed64207ea1b",
      type: "TextInput",
      attributes: {
        label: "Full Name",
        placeholder: "Enter your full name",
        subLabel: "Please provide your legal name as it appears on ID.",
        required: true,
      },
    },
  ]);
  return (
    <div>
      <FormBuilderProvider
        googleApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
        onDroppedANewElement={(event) => {
          const { element, previousElementId, nextElementId } = event;
          console.log(
            "onDroppedANewElement",
            element,
            previousElementId,
            nextElementId
          );
        }}
        // onElementAttributesSaved={(event) => {
        //   const { elementId, attributes } = event;
        // }}
        onElementOrderChanged={(event) => {
          const { element, previousElementId, nextElementId } = event;
          console.log(
            "onElementOrderChanged",
            element,
            previousElementId,
            nextElementId
          );
        }}
        // onElementRemoved={(event) => {
        //   const { element } = event;
        // }}
        elements={[
          {
            id: "1efc1d82-66cb-6590-ae4e-bed64207ea1b",
            type: "TextInput",
            attributes: {
              label: "Full Name",
              placeholder: "Enter your full name",
              subLabel: "Please provide your legal name as it appears on ID.",
              required: true,
            },
          },
        ]}
      >
        <FormBoard>
          <div className="flex gap-2 w-full">
            <div className="flex-1 rounded-lg border border-slate-300 bg-white p-4">
              <h4 className="text-center rounded bg-secondary-light py-2 mb-4">
                Form Preview
              </h4>
              <FormPreviewRenderer />
            </div>
            <div className="flex-1 rounded-lg border border-slate-300 bg-white p-4">
              <h4 className="text-center rounded bg-secondary-light py-2 mb-4">
                Form Designer
              </h4>
              <FormDroppableContainer>
                <FormDesignRenderer />
              </FormDroppableContainer>
            </div>
            <div className="flex-1 rounded-lg border border-slate-300 bg-white p-4">
              <FormDesignerButton
                accent="indigo"
                formElement={FormElements.TextInput.construct(
                  "short-text-sidebard-button"
                )}
              />
            </div>
          </div>
        </FormBoard>
      </FormBuilderProvider>
      <FormBoard>
        <div className="flex gap-2 w-full bg-transparent p-4">
          <div className="flex-1 p-4"></div>
          <div className="flex-1 rounded-lg border border-slate-300 bg-white p-4">
            <h4 className="text-center rounded bg-secondary-light py-2 mb-4">
              Form Response
            </h4>
            <form className="space-y-8">
              <FormSubmissionProvider
                submissionData={formElements.map((element) => {
                  return {
                    element: element,
                    responseValue: {},
                  };
                })}
                onSubmit={(data) => {
                  console.log(data);
                }}
              >
                {formElements.map((element) => {
                  return (
                    <FormSubmissionElement
                      key={element.id}
                      submissionData={{
                        element: element,
                        responseValue: {},
                      }}
                      onResponse={(data) => {
                        console.log(data);
                      }}
                    />
                  );
                })}

                <FormSubmissionButton>
                  Submit response <TbSend />
                </FormSubmissionButton>
              </FormSubmissionProvider>
            </form>
          </div>
          <div className="flex-1 p-4"></div>
        </div>
      </FormBoard>
    </div>
  );
}
