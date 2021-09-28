import * as React from "react";
import { hydrate } from "react-dom";
import { App } from "./components/app";

hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
