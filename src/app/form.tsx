import {
  Col,
  Container,
  DrawerContextProvider,
  FormGroup,
  Input,
  Label,
  Row,
} from "@ims-systems-00/ims-ui-kit";
import { useState } from "react";
import { FormElements } from "../components";
import { Box } from "../components/box";
import { FormBuilderBoard } from "../components/builder/board";
import { CopyFormButton } from "../components/builder/copy-form-button";
import { DesingerButton } from "../components/builder/designer-button";
import { DragOverLay } from "../components/builder/drag-overlay";
import { DropableContainer } from "../components/builder/dropable-container";
import { FormBuilderProvider } from "../components/builder/form-builder/form-builder-provider";
import { FormDesignRenderer } from "../components/builder/form-design-rederer";
import { FormPreviewRenderer } from "../components/builder/form-preview-renderer";
import { FiCopy } from "react-icons/fi";

export function Form() {
  const [formElements, setFormElements] = useState([]);
  const [formState, setFormState] = useState<"design" | "preview">("preview");
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
              <Col md="8">
                <Box>
                  <FormGroup>
                    <Input
                      type="textarea"
                      onBlur={(e) => {
                        try {
                          const formElementsJSON = e.currentTarget.value;
                          const parsed = JSON.parse(formElementsJSON);
                          if (Array.isArray(parsed.elements)) {
                            setFormElements(parsed.elements);
                          }
                        } catch (err) {
                          console.log("form parse error: ", err);
                        }
                      }}
                    />
                  </FormGroup>
                </Box>
              </Col>
              <Col className="4">
                <Box>
                  <CopyFormButton>
                    <FiCopy />
                  </CopyFormButton>
                  <FormGroup switch className="pull-right">
                    <Input
                      type="switch"
                      checked={formState === "preview"}
                      onChange={() => {
                        if (formState === "design") setFormState("preview");
                        if (formState === "preview") setFormState("design");
                      }}
                    />
                    <Label>Preview Form</Label>
                  </FormGroup>
                </Box>
              </Col>
              <Col md="8">
                {formState === "design" && (
                  <DropableContainer>
                    <FormDesignRenderer />
                  </DropableContainer>
                )}
                {formState === "preview" && (
                  <Box>
                    <h4 className="text-center rounded bg-secondary-light py-2 mb-4">
                      Form Preview
                    </h4>
                    <FormPreviewRenderer />
                  </Box>
                )}
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
            </Row>
            <DragOverLay />
          </Container>
        </FormBuilderBoard>
      </FormBuilderProvider>
    </DrawerContextProvider>
  );
}
