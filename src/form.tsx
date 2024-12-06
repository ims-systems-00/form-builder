import {
  Col,
  Container,
  DrawerContextProvider,
  FormGroup,
  Input,
  Row,
} from "@ims-systems-00/ims-ui-kit";
import { useState } from "react";
import { FormElements } from "./components";
import { Box } from "./components/box";
import { FormBuilderBoard } from "./components/builder/board";
import { CopyFormButton } from "./components/builder/copy-form-button";
import { DesingerButton } from "./components/builder/designer-button";
import { DragOverLay } from "./components/builder/drag-overlay";
import { DropableContainer } from "./components/builder/dropable-container";
import { FormBuilderProvider } from "./components/builder/form-builder/form-builder-provider";
import { FormDesignRenderer } from "./components/builder/form-design-rederer";
import { FormPreviewRenderer } from "./components/builder/form-preview-renderer";

export function Form() {
  const [formElements, setFormElements] = useState([]);
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
                  <CopyFormButton>Copy This Form</CopyFormButton>
                </Box>
              </Col>
              <Col md="8">
                <DropableContainer>
                  <FormDesignRenderer />
                </DropableContainer>
              </Col>
              <Col md="4">
                <div className="position-sticky top-0 right-0">
                  <Row>
                    <Col md="3">
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.Header.construct(
                          "header-text-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.TextInput.construct(
                          "short-text-sidebard-button"
                        )}
                      />
                    </Col>

                    <Col md="3">
                      {" "}
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.LongText.construct(
                          "long-text-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.FullName.construct(
                          "full-name-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.Email.construct(
                          "email-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.Divider.construct(
                          "divider-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.PhoneNumber.construct(
                          "phone-number-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.Address.construct(
                          "address-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.RadioSingleChoice.construct(
                          "radio-single-choice-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.CheckBoxMultipleChoice.construct(
                          "checkbox-multiple-choice-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      {" "}
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.DropDown.construct(
                          "dropdown-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.Alert.construct(
                          "alert-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.DateInput.construct(
                          "date-input-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.RichContent.construct(
                          "rick-text-content-sidebard-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.Location.construct(
                          "location-sidebar-button"
                        )}
                      />
                    </Col>
                    <Col md="3">
                      <DesingerButton
                        shape="square"
                        formElement={FormElements.Consent.construct(
                          "concent-sidebar-button"
                        )}
                      />
                    </Col>
                  </Row>
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
