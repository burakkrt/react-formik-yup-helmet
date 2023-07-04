import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CustomHelmetProvider from "./helmet/index.jsx";
import { RouterProvider } from "react-router-dom";
import routerContext from "./router/index.jsx";
import ContextProvider from "./context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <CustomHelmetProvider>
      <ContextProvider>
        <RouterProvider router={routerContext} />
      </ContextProvider>
    </CustomHelmetProvider>
  </React.Fragment>
);