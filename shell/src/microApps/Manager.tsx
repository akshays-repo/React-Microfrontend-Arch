import React, { useEffect, useRef } from "react";
import { mount } from "manager/ManagerIndex";
import { managerRoutingPrefix, shellBrowserHistory } from "../router/constants";
import { useNavigate } from "react-router-dom";

const managerBaseName = `/${managerRoutingPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen to navigation events dispatched inside manager mfe.
    const app2NavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${managerBaseName}${pathname}`;
      if (newPathname === shellBrowserHistory.location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[manager] navigated", app2NavigationEventHandler);

    // Listen to navigation events in shell app to notifify manager mfe.
    const unlistenHistoryChanges = shellBrowserHistory.listen(
      ({ location }) => {
        if (location.pathname.startsWith(managerBaseName)) {
          window.dispatchEvent(
            new CustomEvent("[shell] navigated", {
              detail: location.pathname.replace(managerBaseName, ""),
            })
          );
        }
      }
    );

    mount({
      mountPoint: wrapperRef.current!,
      initialPathname: shellBrowserHistory.location.pathname.replace(
        managerBaseName,
        ""
      ),
    });

    return () => {
      window.removeEventListener(
        "[manager] navigated",
        app2NavigationEventHandler
      );
      unlistenHistoryChanges();
    };
  }, []);

  return <div ref={wrapperRef} />;
};
