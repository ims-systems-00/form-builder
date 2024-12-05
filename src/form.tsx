import {
  Button,
  Col,
  Container,
  DrawerContextProvider,
  Input,
  Row,
} from "@ims-systems-00/ims-ui-kit";
import { FormElements } from "./components";
import { DesingerButton } from "./components/builder/designer-button";
import { DropableContainer } from "./components/builder/dropable-container";
import { DragOverLay } from "./components/builder/drag-overlay";
import { FormBuilderProvider } from "./components/builder/form-builder/form-builder-provider";
import { FormBuilderBoard } from "./components/builder/board";
import { FormDesignRenderer } from "./components/builder/form-design-rederer";
import { FormPreviewRenderer } from "./components/builder/form-preview-renderer";
import { Box } from "./components/box";
import { useState } from "react";
import { useClipboard } from "@ims-systems-00/ims-react-hooks";

export function Form() {
  const [formElements, setFormElements] = useState([]);
  const { copyPlainTextToClipboard } = useClipboard();
  return (
    <DrawerContextProvider>
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
        elements={formElements}
      >
        <FormBuilderBoard>
          <Container className="py-4">
            <Row>
              <Col md="12">
                <Input
                  type="textarea"
                  onBlur={(e) => {
                    try {
                      const formElementsJSON = e.currentTarget.value;
                      const elements = JSON.parse(formElementsJSON);
                      if (Array.isArray(elements.elements)) {
                        setFormElements(elements);
                      }
                    } catch (err) {
                      console.log("form parse error: ", err);
                    }
                  }}
                />
              </Col>
              <Col md="8">
                <Button
                  onClick={() => {
                    copyPlainTextToClipboard(
                      JSON.stringify({ elements: formElements })
                    );
                  }}
                >
                  Copy This Form
                </Button>
                <DropableContainer>
                  <FormDesignRenderer />
                </DropableContainer>
              </Col>
              <Col md="1">
                <div className="position-sticky top-0 right-0">
                  <DesingerButton
                    shape="square"
                    formElement={FormElements.Header.construct(
                      "header-text-sidebard-button"
                    )}
                  />
                  <DesingerButton
                    shape="square"
                    formElement={FormElements.RichContent.construct(
                      "rick-text-content-sidebard-button"
                    )}
                  />
                  <DesingerButton
                    shape="square"
                    formElement={FormElements.TextInput.construct(
                      "short-text-sidebard-button"
                    )}
                  />
                  <DesingerButton
                    shape="square"
                    formElement={FormElements.LongText.construct(
                      "long-text-sidebard-button"
                    )}
                  />
                  <DesingerButton
                    shape="square"
                    formElement={FormElements.Location.construct(
                      "location-sidebar-button"
                    )}
                  />
                  <DesingerButton
                    shape="square"
                    formElement={FormElements.Consent.construct(
                      "concent-sidebar-button"
                    )}
                  />
                </div>
              </Col>
              <Col md="8" className="my-2">
                <Box>
                  <h4 className="text-center rounded bg-secondary-light py-2 mb-4">
                    Form Preview
                  </h4>
                  <FormPreviewRenderer />
                </Box>
              </Col>
            </Row>
            <DragOverLay />
          </Container>
        </FormBuilderBoard>
      </FormBuilderProvider>
    </DrawerContextProvider>
  );
}
