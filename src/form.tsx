import {
  Button,
  Col,
  Container,
  DrawerContextProvider,
  DrawerOpener,
  DrawerRight,
  Row,
} from "@ims-systems-00/ims-ui-kit";
import { Box } from "./components/box";
import { FormElements } from "./components";
import { FormElement, FormElementInstance } from "./components/builder/types";

const elements: FormElementInstance[] = [
  FormElements.TextInput.construct("unique-id-1"),
  FormElements.LongText.construct("unique-id-2"),
  FormElements.Header.construct("unique-id-3"),
  FormElements.Divider.construct("unique-id-4"),
  FormElements.FullName.construct("unique-id-5"),
];

export function Form() {
  return (
    <DrawerContextProvider>
      <Container className="py-4">
        <Row>
          <Col md="8">
            {elements.map((element: FormElementInstance) => {
              const Element = FormElements[element.type] as FormElement;
              const DesignerComponent = Element.DesignerComponent;
              const PropertiesComponent = Element.PropertiesComponent;
              // const Element = element;
              return (
                <Box>
                  <DesignerComponent formElement={element} />
                  <DrawerOpener drawerId={element.id}>
                    <Button size="sm">Properties</Button>
                  </DrawerOpener>
                  <DrawerRight size={20} drawerId={element.id}>
                    <PropertiesComponent
                      formElement={element}
                      onAttributeSave={() => {}}
                    />
                  </DrawerRight>
                </Box>
              );
            })}
          </Col>
          <Col md="4">
            <Box height={70} width={70}>
              <div className="d-flex justiy-content-center align-items-center flex-column">
                {FormElements.TextInput.designerButtton.icon}
                <span> {FormElements.TextInput.designerButtton.text}</span>
              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </DrawerContextProvider>
  );
}
