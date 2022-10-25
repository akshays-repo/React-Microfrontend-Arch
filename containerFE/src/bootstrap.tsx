import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App";

console.log("Bootstrap App");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
