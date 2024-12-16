import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import { Form } from "./app/form";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [{ path: "/", element: <Form /> }],
  },
]);
