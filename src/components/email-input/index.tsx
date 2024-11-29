import React, { useEffect, useState } from "react";
import {
  Button,
  FormGroup,
  Input,
  InputGroup,
  Label,
} from "@ims-systems-00/ims-ui-kit";
import { FiTrash2, FiCopy, FiSettings } from "react-icons/fi";

export interface EmailInputProps {
  label: string;
  subLebel?: string;
  showSubLebel?: boolean;
  required?: boolean;
  onResponseChange?(text: string): void;
  onLabelChange?(text: string): void;
  onChangeSubLebelVisibility?(vis: boolean): void;
  onRequiredChange?(required: boolean): void;
  validationRules?: string;
  builderMode?: boolean;
}

export enum LABEL_MODES {
  EDIT = "EDIT",
  VIEW = "VIEW",
}

export const EmailInput: React.FC<EmailInputProps> = ({
  label,

  showSubLebel = false,
  required = false,
  onResponseChange,
  onLabelChange,
  onChangeSubLebelVisibility,
  onRequiredChange,
  builderMode = false,
}) => {
  const [updatedLabel, setUpdatedLabel] = useState("");
  const [_showSubLebel, set_ShowSubLebel] = useState<boolean>();
  const [_required, set_Required] = useState<boolean>(required);
  const [modeLabel, setModeLabel] = useState<LABEL_MODES>(LABEL_MODES.VIEW);

  useEffect(() => {
    setUpdatedLabel(label);
  }, [label]);

  useEffect(() => {
    set_ShowSubLebel(showSubLebel);
  }, [showSubLebel]);

  return (
    <FormGroup className="border border-primary rounded p-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        {modeLabel === LABEL_MODES.VIEW && (
          <Label className="mb-0">
            {label}
            {_required && <span className="text-danger">*</span>}
          </Label>
        )}
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
            className="border-0"
            size="sm"
            outline
            onClick={() => {
              setModeLabel(LABEL_MODES.EDIT);
            }}
          >
            Edit
          </Button>
        )}
      </div>

      <Input
        type="email"
        onChange={(e) => {
          if (typeof onResponseChange === "function")
            onResponseChange(e.currentTarget.value);
        }}
      />

      <div className="d-flex justify-content-between align-items-center mt-2">
        <FormGroup switch className="mb-0">
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
          />
          <Label className="ms-2 mb-0">Sub lebel</Label>
        </FormGroup>

        <div className="d-flex align-items-center gap-3">
          <Button color="link" className="p-0">
            <FiTrash2 size={18} />
          </Button>
          <Button color="link" className="p-0">
            <FiCopy size={18} />
          </Button>
          <Button color="link" className="p-0">
            <FiSettings size={18} />
          </Button>
          <div className="ms-3 d-flex align-items-center">
            <Label className="me-2 mb-0">Required</Label>
            <FormGroup switch className="mb-0">
              <Input
                type="switch"
                checked={_required}
                onChange={() => {
                  set_Required((state) => {
                    if (typeof onRequiredChange === "function")
                      onRequiredChange(!state);
                    return !state;
                  });
                }}
              />
            </FormGroup>
          </div>
        </div>
      </div>
    </FormGroup>
  );
};
