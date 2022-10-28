import React from "react";
import { FallbackProps } from "react-error-boundary";
import { shellBrowserHistory } from "../router/constants";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
      <button
        onClick={() => {
          shellBrowserHistory.back();
        }}
      >
        go back
      </button>
    </div>
  );
}
