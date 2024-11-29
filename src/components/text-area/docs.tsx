import React, { useState } from "react";
import { TextAreaInput } from ".";
import { Alert, Card, CardBody, Col, Row } from "@ims-systems-00/ims-ui-kit";

function saveLable(t: string) {
  console.log(t);
}

export const path = "textarea-input";

export function Documentation() {
  const [label, setLabel] = useState("Lorem ipsum dolor sit amet consectetur?");
  const [vis, setVis] = useState(false);
  const [required, setRequired] = useState(false);
  const [placeholder, setPlaceholder] = useState("Lorem ipsum....");

  const handleDelete = () => {
    console.log("Delete action triggered");
  };

  const handleDuplicate = () => {
    console.log("Duplicate action triggered");
  };

  const handleSettings = () => {};

  return (
    <React.Fragment>
      <Row>
        <Col md="7" className="mx-auto">
          <Alert color="warning" className="border border-warning">
            <h5>See how the element will appear in a form context</h5>
            <p>
              This textarea input component provides a customizable form field
              for longer text input with various options like sub-label
              visibility, required field toggle, and builder mode functionality.
              It now includes delete, duplicate, and settings actions.
            </p>
          </Alert>
          <Card>
            <CardBody>
              <TextAreaInput
                label={label}
                subLebel="Enter your response"
                builderMode
                showSubLebel={vis}
                required={required}
                placeholder={placeholder}
                onChangeSubLebelVisibility={(vis: boolean) => {
                  setVis(vis);
                }}
                onRequiredChange={(required: boolean) => {
                  setRequired(required);
                }}
                onChangePlaceholder={(text: string) => {
                  setPlaceholder(text);
                  console.log(text);
                }}
                onLabelChange={(text: string) => {
                  saveLable(text);
                  return setLabel(text);
                }}
                onResponseChange={(text: string) => {
                  console.log(text);
                }}
                onDelete={handleDelete}
                onDuplicate={handleDuplicate}
                onSettings={handleSettings}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}
