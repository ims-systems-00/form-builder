import classNames from "classnames";
import React, { useEffect } from "react";
import { Varients } from "./type";

interface ColorVarientPickerProps {
  varient?: Varients;
  onVarientChange?: (params: Varients) => void;
}

export const ColorVarientPicker: React.FC<ColorVarientPickerProps> = ({
  varient,
  onVarientChange,
}) => {
  const [selectedVarient, setSelectedVarient] = React.useState<Varients>(
    Varients.PRIMARY
  );
  useEffect(() => {
    if (varient) setSelectedVarient(varient);
  }, [varient]);
  return (
    <React.Fragment>
      <div className="d-flex gap-2">
        {Object.values(Varients).map((varient) => (
          <div
            key={varient + Date.now()}
            onClick={() => {
              if (typeof onVarientChange === "function")
                onVarientChange(varient);
              setSelectedVarient(varient);
            }}
            className={classNames("border border-3 rounded", {
              "bg-success": varient === Varients.SUCCESS,
              "bg-primary": varient === Varients.PRIMARY,
              "bg-danger": varient === Varients.DANGER,
              "bg-secondary": varient === Varients.SECONDARY,
              "bg-warning": varient === Varients.WARNING,
              "bg-light": varient === Varients.LIGHT,
              "bg-dark": varient === Varients.DARK,

              "border-success": varient === Varients.SUCCESS,
              "border-primary": varient === Varients.PRIMARY,
              "border-danger": varient === Varients.DANGER,
              "border-secondary": varient === Varients.SECONDARY,
              "border-warning": varient === Varients.WARNING,
              "border-light": varient === Varients.LIGHT,
              "border-dark": varient === Varients.DARK,

              "opacity-25": selectedVarient !== varient,
            })}
            style={{
              width: "40px",
              height: "40px",
            }}
          ></div>
        ))}
      </div>
    </React.Fragment>
  );
};
