import { useState } from "react";
import { Card, CardBody, Col, Row } from "@ims-systems-00/ims-ui-kit";
import { Email } from ".";

export const path = "email";

export function Documentation() {
  const [label, setLabel] = useState("Email");
  const [subLabel, setSubLabel] = useState("Enter your email address");
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
              onHandleDelete={() => console.log("Email Deleted")}
              onHandleDuplicate={() => console.log("Email Duplicated")}
              onHandleSettings={() => console.log("Settings Opened")}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
