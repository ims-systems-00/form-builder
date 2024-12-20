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
import { FormBoard } from "../components/builder/form-board";
import { CopyFormButton } from "../components/builder/copy-form-button";
import { FormDesignerButton } from "../components/builder/form-designer-button";
import { DragOverLay } from "../components/builder/drag-overlay";
import { FormDroppableContainer } from "../components/builder/form-droppable-container";
import { FormBuilderProvider } from "../components/builder/form-builder/form-builder-provider";
import { FormDesignRenderer } from "../components/builder/form-design-renderer";
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
        <FormBoard>
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
                  <FormDroppableContainer>
                    <FormDesignRenderer />
                  </FormDroppableContainer>
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
              <Col md="4">
                <div className="position-sticky top-0 right-0">
                  <Row>
                    <Col md="3">
                      <FormDesignerButton
                        formElement={FormElements.Header.construct(
                          "header-text-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      <FormDesignerButton
                        accent='indigo'
                        formElement={FormElements.TextInput.construct(
                          "short-text-sidebard-button"
                        )}
                      />
                    </Col>

                    <Col md="3">
                      {" "}
                      <FormDesignerButton
                      accent='purple'
                        formElement={FormElements.LongText.construct(
                          "long-text-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <FormDesignerButton
                        accent="orange"
                        formElement={FormElements.FullName.construct(
                          "full-name-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <FormDesignerButton
                        formElement={FormElements.Email.construct(
                          "email-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <FormDesignerButton
                        formElement={FormElements.Divider.construct(
                          "divider-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <FormDesignerButton
                        formElement={FormElements.PhoneNumber.construct(
                          "phone-number-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <FormDesignerButton
                        formElement={FormElements.Address.construct(
                          "address-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <FormDesignerButton
                        formElement={FormElements.RadioSingleChoice.construct(
                          "radio-single-choice-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <FormDesignerButton
                        formElement={FormElements.CheckBoxMultipleChoice.construct(
                          "checkbox-multiple-choice-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <FormDesignerButton
                        formElement={FormElements.DropDown.construct(
                          "dropdown-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      <FormDesignerButton
                        formElement={FormElements.Alert.construct(
                          "alert-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      <FormDesignerButton
                        formElement={FormElements.DateInput.construct(
                          "date-input-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      <FormDesignerButton
                        formElement={FormElements.RichContent.construct(
                          "rick-text-content-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      <FormDesignerButton
                        formElement={FormElements.Location.construct(
                          "location-sidebar-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      <FormDesignerButton
                        formElement={FormElements.Consent.construct(
                          "concent-sidebar-button"
                        )}
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <DragOverLay />
          </Container>
        </FormBoard>
      </FormBuilderProvider>
    </DrawerContextProvider>
  );
}
