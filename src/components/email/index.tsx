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
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoDuplicateOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

interface EmailProps {
  label: string;
  subLabel?: string;
  builderMode?: boolean;
  isSubLabelVisibility?: boolean;
  isRequired?: boolean;
  onRequiredChange?(required: boolean): void;
  onSubLabelVisibilityChange?(vis: boolean): void;
  onLabelChange?(text: string): void;
  onSubLabelChange?(text: string): void;
  onResponseChange?(text: string): void;
  onHandleDelete?(): void;
  onHandleDuplicate?(): void;
  onHandleSettings?(): void;
}

export enum LABEL_MODES {
  EDIT = "EDIT",
  VIEW = "VIEW",
}

export const Email: React.FC<EmailProps> = ({
  label,
  subLabel = "",
  isRequired = false,
  isSubLabelVisibility = false,
  builderMode = false,
  onRequiredChange,
  onSubLabelVisibilityChange,
  onLabelChange,
  onSubLabelChange,
  onResponseChange,
  onHandleDelete,
  onHandleDuplicate,
  onHandleSettings,
}) => {
  const [labelState, setLabelState] = useState("");
  const [subLabelState, setSubLabelState] = useState("");
  const [modeLabel, setModeLabel] = useState<LABEL_MODES>(LABEL_MODES.VIEW);
  const [modeSubLabel, setModeSubLabel] = useState<LABEL_MODES>(
    LABEL_MODES.VIEW
  );

  useEffect(() => {
    setLabelState(label);
  }, [label]);

  useEffect(() => {
    if (typeof subLabel === "string") {
      setSubLabelState(subLabel);
    }
  }, [subLabel]);

  return (
    <DrawerContextProvider>
      <FormGroup>
        {modeLabel === LABEL_MODES.VIEW && (
          <Label>
            {label}
            {isRequired && (
              <span style={{ color: "red", marginLeft: "0.25rem" }}>*</span>
            )}
          </Label>
        )}

        {modeLabel === LABEL_MODES.EDIT && (
          <InputGroup>
            <Input
              className="d-inline bg-transparent border-0 px-1"
              type="text"
              value={labelState}
              onChange={(e) => {
                setLabelState(e.currentTarget.value);
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
                  onLabelChange(labelState);
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
                setLabelState(label);
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
            <CiEdit className="me-1" size={14} />
            Edit
          </Button>
        )}

        <Input
          type="email"
          onChange={(e) => {
            if (typeof onResponseChange === "function") {
              onResponseChange(e.currentTarget.value);
            }
          }}
          required={isRequired}
        />

        {isSubLabelVisibility && modeSubLabel === LABEL_MODES.VIEW && (
          <>
            <Label>
              <small>{subLabel}</small>
            </Label>

            {builderMode && (
              <Button
                className="pull-right border-0 mb-1"
                size="sm"
                outline
                onClick={() => {
                  setModeSubLabel(LABEL_MODES.EDIT);
                }}
              >
                <CiEdit className="me-1" size={14} />
                Edit
              </Button>
            )}
          </>
        )}

        {isSubLabelVisibility && modeSubLabel === LABEL_MODES.EDIT && (
          <InputGroup>
            <Input
              className="d-inline bg-transparent border-0 px-1"
              type="text"
              value={subLabelState}
              onChange={(e) => {
                setSubLabelState(e.currentTarget.value);
              }}
            />
            <Button
              size="sm"
              color="success"
              outline
              className="border-0"
              onClick={() => {
                setModeSubLabel(LABEL_MODES.VIEW);
                if (typeof onSubLabelChange === "function")
                  onSubLabelChange(subLabelState);
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
                if (typeof subLabel === "string") {
                  setSubLabelState(subLabel);
                  setModeSubLabel(LABEL_MODES.VIEW);
                }
              }}
            >
              Cancel
            </Button>
          </InputGroup>
        )}

        {/* Control */}
        <div className="border-top mt-4">
          <div className="pt-3 d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2">
              <FormGroup switch>
                <Input
                  type="switch"
                  checked={isSubLabelVisibility}
                  onChange={() => {
                    if (typeof onSubLabelVisibilityChange === "function") {
                      onSubLabelVisibilityChange(!isSubLabelVisibility);
                    }
                  }}
                />
              </FormGroup>
              <Label>Sub Label</Label>
            </div>

            <div className="d-flex gap-4 align-items-center">
              <div className="d-flex align-items-center gap-4 border-end pe-3 mb-2">
                <RiDeleteBin6Line
                  role="button"
                  size={18}
                  onClick={() => {
                    if (typeof onHandleDelete === "function") {
                      onHandleDelete();
                    }
                  }}
                />
                <IoDuplicateOutline
                  role="button"
                  size={18}
                  onClick={() => {
                    if (typeof onHandleDuplicate === "function") {
                      onHandleDuplicate();
                    }
                  }}
                />
                <DrawerOpener drawerId="uniqu-id-element">
                  <IoSettingsOutline
                    role="button"
                    size={18}
                    onClick={() => {
                      if (typeof onHandleSettings === "function") {
                        onHandleSettings();
                      }
                    }}
                  />
                </DrawerOpener>
              </div>

              <div className="d-flex gap-3">
                <Label>Required</Label>
                <FormGroup switch>
                  <Input
                    type="switch"
                    checked={isRequired}
                    onChange={() => {
                      if (typeof onRequiredChange === "function") {
                        onRequiredChange(!isRequired);
                      }
                    }}
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </div>
      </FormGroup>
      <DrawerRight drawerId="uniqu-id-element" size={20}>
        <p>No props</p>
      </DrawerRight>
    </DrawerContextProvider>
  );
};
