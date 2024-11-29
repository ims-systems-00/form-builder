import { useState } from "react";
import { Card, CardBody, Col, Row } from "@ims-systems-00/ims-ui-kit";
import { Email } from ".";

export const path = "email";

export function Documentation() {
  const [label, setLabel] = useState("Email");
  const [subLabel, setSubLabel] = useState("Enter your email address");
  const [placeholder, setPlaceholder] = useState("Enter your email address");
  const [isSubLabelVisible, setIsSubLabelVisible] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

  return (
    <Row>
      <Col md="7" className="mx-auto">
        <Card>
          <CardBody>
            <Email
              builderMode
              label={label}
              subLabel={subLabel}
              isSubLabelVisibility={isSubLabelVisible}
              placeholder={placeholder}
              isRequired={isRequired}
              onSubLabelVisibilityChange={(vis) => {
                setIsSubLabelVisible(vis);
                console.log("SubLabel Visibility:", vis);
              }}
              onLabelChange={(text) => {
                setLabel(text);
                console.log("Label Updated:", text);
              }}
              onSubLabelChange={(text) => {
                setSubLabel(text);
                console.log("SubLabel Updated:", text);
              }}
              onResponseChange={(text) => console.log("Email Entered:", text)}
              onRequiredChange={(req) => {
                setIsRequired(req);
                console.log("Required Updated:", req);
              }}
              onChangePlaceholder={(text: string) => {
                setPlaceholder(text);
                console.log("Placeholder Updated:", text);
              }}
              onDelete={() => console.log("Email Deleted")}
              onDuplicate={() => console.log("Email Duplicated")}
              onSettings={() => {}}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
