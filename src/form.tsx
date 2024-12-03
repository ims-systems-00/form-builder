import {
  Col,
  Container,
  DrawerContextProvider,
  Row,
} from "@ims-systems-00/ims-ui-kit";
import { FormElements } from "./components";
import { DesginerElement } from "./components/builder/designer-element";
import { FormElementInstance } from "./components/form-elements/types";
import { DesingerButton } from "./components/builder/designer-button";
import { DropableContainer } from "./components/builder/dropable-container";
import { DesignProvider } from "./components/builder/design-provider";
import { DragOverLay } from "./components/builder/drag-overlay";
import { FormBuilder } from "./components/builder/form-builder";
import { FormBuilderBoard } from "./components/builder/board";

const elements: FormElementInstance[] = [
  FormElements.TextInput.construct("unique-id-1"),
  FormElements.LongText.construct("unique-id-2"),
  FormElements.Header.construct("unique-id-3"),
  FormElements.Divider.construct("unique-id-4"),
  FormElements.FullName.construct("unique-id-5"),
  FormElements.Email.construct("unique-id-6"),
  FormElements.Address.construct("unique-id-7"),
  FormElements.PhoneNumber.construct("unique-id-8"),
  FormElements.MultipleChoice.construct("unique-id-9"),
];

export function Form() {
  return (
    <DrawerContextProvider>
      <FormBuilder>
        <FormBuilderBoard>
          <Container className="py-4">
            <DesignProvider>
              <Row>
                <Col md="8">
                  <DropableContainer>
                    {elements.map((element: FormElementInstance) => {
                      return <DesginerElement formElement={element} />;
                    })}
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
            </DesignProvider>
          </Container>
        </FormBuilderBoard>
      </FormBuilder>
    </DrawerContextProvider>
  );
}
