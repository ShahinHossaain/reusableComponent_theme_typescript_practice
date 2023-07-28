import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HOC from "./component/hoc/HOC.tsx";
import RenderProps from "./component/renderProps/RenderProps.tsx";
import Theme from "./component/theme/Theme.tsx";
import DisplayButton from "./component/reusableComponent/DisplayButton.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/hoc",
        element: <HOC />,
      },
      {
        path: "/renderProps",
        element: <RenderProps />,
      },
      {
        path: "/theme",
        element: <Theme />,
      },
      {
        path: "/button",
        element: <DisplayButton />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
