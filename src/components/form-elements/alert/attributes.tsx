// export enum AlertType {
//   PRIMARY = "primary",
//   SECONDARY = "secondary",
//   DANGER = "danger",
//   WARNING = "warning",
//   INFO = "info",
//   LIGHT = "light",
//   DARK = "dark",
//   SUCCESS = "success",
// }

import { Varients } from "../../color-varient-picker/type";
export type Attributes = {
  message: string;
  alertType: Varients;
  dismissible: boolean;
};

export const attributes: Attributes = {
  message: "This is an alert message!",
  alertType: Varients.PRIMARY,
  dismissible: false,
};
