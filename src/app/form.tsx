import { FormElements } from "../components";
import { FormBoard } from "../components/builder/form-board";
import { FormBuilderProvider } from "../components/builder/form-builder/form-builder-provider";
import { FormDesignRenderer } from "../components/builder/form-design-renderer";
import { FormDesignerButton } from "../components/builder/form-designer-button";
import { FormDroppableContainer } from "../components/builder/form-droppable-container";
import { FormPreviewRenderer } from "../components/builder/form-preview-renderer";

export function Form() {
  return (
    <FormBuilderProvider
      googleApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
      // onDroppedANewElement={(event) => {
      //   const { element, previousElement, nextElement } = event;
      // }}
      // onElementAttributesSaved={(event) => {
      //   const { elementId, attributes } = event;
      // }}
      // onElementOrderChanged={(event) => {
      //   const { element, previousElement, nextElement } = event;
      // }}
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
        {/* <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-start-1 row-end-4 rounded-lg bg-white">
           
          </div>
          <div className="row-start-1 row-end-4 rounded-lg bg-white">
           
          </div>
          <div className="row-start-1 row-end-4 rounded-lg bg-white">
            
          </div>
        </div> */}
      </FormBoard>
    </FormBuilderProvider>
  );
}
