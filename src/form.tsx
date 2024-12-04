import {
  Col,
  Container,
  DrawerContextProvider,
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

export function Form() {
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
        // elements={[
        //   FormElements.Header.construct("uniqu-ia-123"),
        //   FormElements.TextInput.construct("uniqu-ia-123"),
        //   FormElements.LongText.construct("uniqu-ia-123"),
        // ]}
      >
        <FormBuilderBoard>
          <Container className="py-4">
            <Row>
              <Col md="8">
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
