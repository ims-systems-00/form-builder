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
import { FormElement } from "./components/builder/types";

const elements: FormElement[] = [
  TextInput,
  LongText,
  Header,
  Divider,
  FullName,
];

export function Form() {
  return (
    <DrawerContextProvider>
      <Container className="py-4">
        <Row>
          <Col md="8">
            {elements.map((element: FormElement, index: number) => {
              const DesignerComponent = element.DesignerComponent;
              const PropertiesComponent = element.PropertiesComponent;
              const id = "unique-id-" + index;
              const Element = element.construct(id);
              return (
                <Box>
                  <DesignerComponent formElement={Element} />
                  <DrawerOpener drawerId={id}>
                    <Button size="sm">Properties</Button>
                  </DrawerOpener>
                  <DrawerRight size={20} drawerId={id}>
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
