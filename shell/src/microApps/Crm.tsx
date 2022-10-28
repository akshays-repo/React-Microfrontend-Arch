import React, { useEffect, useRef } from "react";
import { mount } from "crm/CrmIndex";
import { crmRoutingPrefix, shellBrowserHistory } from "../router/constants";
import { useNavigate } from "react-router-dom";

const crmBaseName = `/${crmRoutingPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen to navigation events dispatched inside crm mfe.
    const app2NavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${crmBaseName}${pathname}`;
      if (newPathname === shellBrowserHistory.location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[crm] navigated", app2NavigationEventHandler);

    // Listen to navigation events in shell app to notifify crm mfe.
    const unlistenHistoryChanges = shellBrowserHistory.listen(
      ({ location }) => {
        if (location.pathname.startsWith(crmBaseName)) {
          window.dispatchEvent(
            new CustomEvent("[shell] navigated", {
              detail: location.pathname.replace(crmBaseName, ""),
            })
          );
        }
      }
    );

    mount({
      mountPoint: wrapperRef.current!,
      initialPathname: shellBrowserHistory.location.pathname.replace(
        crmBaseName,
        ""
      ),
    });

    return () => {
      window.removeEventListener("[crm] navigated", app2NavigationEventHandler);
      unlistenHistoryChanges();
    };
  }, []);

  return <div ref={wrapperRef} />;
};
