import React, { useEffect, useRef } from "react";
import { mount } from "app2/App2Index";
import { cowBoyRoutingPrefix, shellBrowserHistory } from "../router/constants";
import { useNavigate } from "react-router-dom";

import { ErrorBoundary } from "react-error-boundary";

const cowBoyBasename = `/${cowBoyRoutingPrefix}`;

import { ErrorFallback } from "../components/ErrorFallBack";

export const CowBoyMF = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen to navigation events dispatched inside app2 mfe.
    const app2NavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${cowBoyBasename}${pathname}`;
      if (newPathname === shellBrowserHistory.location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[app2] navigated", app2NavigationEventHandler);

    // Listen to navigation events in shell app to notifify app2 mfe.
    const unlistenHistoryChanges = shellBrowserHistory.listen(
      ({ location }) => {
        if (location.pathname.startsWith(cowBoyBasename)) {
          window.dispatchEvent(
            new CustomEvent("[shell] navigated", {
              detail: location.pathname.replace(cowBoyBasename, ""),
            })
          );
        }
      }
    );

    mount({
      mountPoint: wrapperRef.current!,
      initialPathname: shellBrowserHistory.location.pathname.replace(
        cowBoyBasename,
        ""
      ),
    });

    return () => {
      window.removeEventListener(
        "[app2] navigated",
        app2NavigationEventHandler
      );
      unlistenHistoryChanges();
    };
  }, []);

  return <div ref={wrapperRef} />;
};

export default () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <CowBoyMF />
    </ErrorBoundary>
  );
};
