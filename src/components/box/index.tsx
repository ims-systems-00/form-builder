import React from "react";
import { Card, CardBody } from "@ims-systems-00/ims-ui-kit";

interface BoxProps {
  children: React.ReactNode;
  height?: string | number;
  width?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
}

export const Box: React.FC<BoxProps> = ({
  children,
  height = "auto",
  width = "auto",
  minHeight = "auto",
  minWidth = "auto",
  maxHeight = "auto",
  maxWidth = "auto",
}) => {
  return (
    <Card
      className="w-100 p-2"
      style={{
        height,
        width,
        minHeight,
        minWidth,
        maxHeight,
        maxWidth,
      }}
    >
      <CardBody>{children}</CardBody>
    </Card>
  );
};
