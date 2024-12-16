import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/app.scss";
import { router } from "./route";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
