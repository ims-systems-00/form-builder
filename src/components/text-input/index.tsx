import React, { useEffect, useState } from "react";
import {
  Button,
  DrawerContextProvider,
  DrawerOpener,
  DrawerRight,
  FormGroup,
  Input,
  InputGroup,
  Label,
} from "@ims-systems-00/ims-ui-kit";
export interface TextInputProps {
  label: string;
  subLebel?: string;
  showSubLebel?: boolean;
  onResponseChange?(text: string): void;
  onLabelChange?(text: string): void;
  onChangeSubLebelVisibility?(vis: boolean): void;
  validationRules?: string;
  builderMode?: boolean;
}
export enum LABEL_MODES {
  EDIT = "EDIT",
  VIEW = "VIEW",
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  subLebel,
  showSubLebel = false,
  onResponseChange,
  onLabelChange,
  onChangeSubLebelVisibility,
  builderMode = false,
}) => {
  const [updatedLabel, setUpdatedLabel] = useState("");
  const [_showSubLebel, set_ShowSubLebel] = useState<boolean>();
  const [modeLabel, setModeLabel] = useState<LABEL_MODES>(LABEL_MODES.VIEW);
  useEffect(() => {
    setUpdatedLabel(label);
  }, [label]);
  useEffect(() => {
    set_ShowSubLebel(showSubLebel);
  }, [showSubLebel]);
  return (
    <DrawerContextProvider>
      <FormGroup>
        {modeLabel === LABEL_MODES.VIEW && <Label>{label}</Label>}
        {modeLabel === LABEL_MODES.EDIT && (
          <InputGroup>
            <Input
              className="d-inline bg-transparent border-0 px-1"
              type="text"
              value={updatedLabel}
              onChange={(e) => {
                setUpdatedLabel(e.currentTarget.value);
              }}
            />
            <Button
              size="sm"
              color="success"
              outline
              className="border-0"
              onClick={() => {
                setModeLabel(LABEL_MODES.VIEW);
                if (typeof onLabelChange === "function")
                  onLabelChange(updatedLabel);
              }}
            >
              Save
            </Button>
            <Button
              size="sm"
              color="danger"
              outline
              className="border-0"
              onClick={() => {
                setUpdatedLabel(label);
                setModeLabel(LABEL_MODES.VIEW);
              }}
            >
              Cancel
            </Button>
          </InputGroup>
        )}

        {modeLabel === LABEL_MODES.VIEW && builderMode && (
          <Button
            className="pull-right border-0 mb-1"
            size="sm"
            outline
            onClick={() => {
              setModeLabel(LABEL_MODES.EDIT);
            }}
          >
            Edit
          </Button>
        )}

        <Input
          type="text"
          onChange={(e) => {
            if (typeof onResponseChange === "function")
              onResponseChange(e.currentTarget.value);
          }}
        />
        {showSubLebel && (
          <Label>
            <small>{subLebel ? subLebel : "Edit this"}</small>
          </Label>
        )}

        {builderMode && (
          <React.Fragment>
            <hr style={{ background: "red" }}></hr>
            <FormGroup switch>
              <Input
                type="switch"
                checked={_showSubLebel}
                onChange={() => {
                  set_ShowSubLebel((state) => {
                    if (typeof onChangeSubLebelVisibility === "function")
                      onChangeSubLebelVisibility(!state);
                    return !state;
                  });
                }}
              />{" "}
              <Label>Sub lebel</Label>
            </FormGroup>
          </React.Fragment>
        )}
        <DrawerOpener drawerId="form-text-element">
          <Button>Settings</Button>
        </DrawerOpener>
      </FormGroup>
      <DrawerRight size={20} drawerId="form-text-element">
        Editable properties
      </DrawerRight>
    </DrawerContextProvider>
  );
};
