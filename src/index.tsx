import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./styles/index.scss";
import "./infra/api-mock";
import "./infra/injectAll";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
