import React, { useState } from "react";
import { TextInput } from ".";
import {
  Alert,
  Card,
  CardBody,
  Col,
  Row,
  Input,
  FormGroup,
} from "@ims-systems-00/ims-ui-kit";
function saveLable(t: string) {
  console.log(t);
}
export const path = "text-input";
export function Documentation() {
  const [label, setLabel] = useState("What's on your mind?");
  const [vis, setVis] = useState(false);
  return (
    <React.Fragment>
      <Row>
        <Col md="7" className="mx-auto">
          <FormGroup switch>
            <Input type="switch" />
          </FormGroup>
          <Alert color="warning" className="border border-warning">
            <h5>See how the element will apear in a form context</h5>
            <p>
              Use the init command to initialize configuration and dependencies
              for a new project. The init command installs dependencies, adds
              the cn util, configures tailwind.config.js, and CSS variables for
              the project.
            </p>
          </Alert>
          <Card>
            <CardBody>
              <TextInput
                label={label}
                subLebel="Someting here"
                builderMode
                showSubLebel={vis}
                onChangeSubLebelVisibility={(vis: boolean) => {
                  setVis(vis);
                }}
                onLabelChange={(text: string) => {
                  saveLable(text);
                  return setLabel(text);
                }}
                onResponseChange={(text: string) => {
                  console.log(text);
                }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}
