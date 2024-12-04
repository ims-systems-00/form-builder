export type Attributes = {
  message: string;
  alertType:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  dismissible: boolean;
};

export const attributes: Attributes = {
  message: "This is an alert message!",
  alertType: "primary",
  dismissible: false,
};
