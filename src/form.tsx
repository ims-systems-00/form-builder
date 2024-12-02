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
import { TextInput, Header, LongText, FullName, Divider } from "./components";
import { FormElementInstance } from "./components/builder/types";

const elements: FormElementInstance[] = [
  TextInput.construct("unique-id-1"),
  TextInput.construct("unique-id-2"),
  LongText.construct("unique-id-3"),
  Header.construct("unique-id-4"),
  Divider.construct("unique-id-5"),
  FullName.construct("unique-id-6"),
];

export function Form() {
  return (
    <DrawerContextProvider>
      <Container className="py-4">
        <Row>
          <Col md="8">
            {elements.map((element: FormElementInstance) => {
              const DesignerComponent = TextInput.DesignerComponent;
              const PropertiesComponent = TextInput.PropertiesComponent;
              const Element = element;
              return (
                <Box>
                  <DesignerComponent formElement={Element} />
                  <DrawerOpener drawerId={element.id}>
                    <Button size="sm">Properties</Button>
                  </DrawerOpener>
                  <DrawerRight size={20} drawerId={element.id}>
                    <PropertiesComponent
                      formElement={Element}
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
                {TextInput.designerButtton.icon}
                <span> {TextInput.designerButtton.text}</span>
              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </DrawerContextProvider>
  );
}
