import { FormGroup, Input, Label } from "@ims-systems-00/ims-ui-kit";
import React from "react";

interface PlaceholderUpdateProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PlaceholderUpdate: React.FC<PlaceholderUpdateProps> = ({
  value,
  onChange,
}) => {
  return (
    <FormGroup>
      <Label>What is the placeholder?</Label>
      <Input type="text" value={value} onChange={onChange} />
    </FormGroup>
  );
};
