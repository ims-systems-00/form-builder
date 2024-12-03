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

export function Form() {
  return (
    <DrawerContextProvider>
      <FormBuilderProvider>
        <FormBuilderBoard>
          <Container className="py-4">
            <Row>
              <Col md="8">
                <DropableContainer>
                  <FormDesignRenderer />
                </DropableContainer>
              </Col>
              <Col md="4">
                <DesingerButton
                  shape="square"
                  formElement={FormElements.TextInput.construct(
                    "short-text-button"
                  )}
                />
                <DesingerButton
                  shape="square"
                  formElement={FormElements.LongText.construct(
                    "long-text-button"
                  )}
                />
              </Col>
            </Row>
            <DragOverLay />
          </Container>
        </FormBuilderBoard>
      </FormBuilderProvider>
    </DrawerContextProvider>
  );
}
