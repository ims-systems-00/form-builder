import React, { useState } from "react";
import { EmailInput } from ".";
import { Alert, Card, CardBody, Col, Row } from "@ims-systems-00/ims-ui-kit";

function saveLable(t: string) {
  console.log(t);
}

export const path = "email-input";

export function Documentation() {
  const [label, setLabel] = useState("Email");
  const [vis, setVis] = useState(false);
  const [required, setRequired] = useState(false);

  return (
    <React.Fragment>
      <Row>
        <Col md="7" className="mx-auto">
          <Alert color="warning" className="border border-warning">
            <h5>See how the element will appear in a form context</h5>
            <p>
              This email input component provides a customizable form field with
              various options like sub-label visibility, required field toggle,
              and builder mode functionality.
            </p>
          </Alert>
          <Card>
            <CardBody>
              <EmailInput
                label={label}
                subLebel="Enter your email address"
                builderMode
                showSubLebel={vis}
                required={required}
                onChangeSubLebelVisibility={(vis: boolean) => {
                  setVis(vis);
                }}
                onRequiredChange={(required: boolean) => {
                  setRequired(required);
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
