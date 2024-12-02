import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import * as BoxDocs from "./components/box/docs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [{ path: BoxDocs.path, element: <BoxDocs.Documentation /> }],
  },
]);
