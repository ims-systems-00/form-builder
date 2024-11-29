import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import * as BoxDocs from "./components/box/docs";
import * as TextInputDocs from "./components/text-input/docs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: BoxDocs.path, element: <BoxDocs.Documentation /> },
      { path: TextInputDocs.path, element: <TextInputDocs.Documentation /> },
    ],
  },
]);
