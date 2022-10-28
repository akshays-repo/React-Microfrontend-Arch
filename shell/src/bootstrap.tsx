import React from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { App } from "./app/App";
import { ErrorFallback } from "./components/ErrorFallBack";

const root = createRoot(document.getElementById("shell-root")!);
root.render(
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <App />
  </ErrorBoundary>
);

export {};
