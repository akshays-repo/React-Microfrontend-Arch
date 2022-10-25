import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthApp";
import { useNavigate, useLocation } from "react-router-dom";

const onSignIn = () => {
  console.log("On Sign in");
};

const AuthFE = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("Auth Fe");
    const { onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathName }: { pathname: string }) => {
        const pathName = location.pathname;
        if (pathName !== nextPathName) {
          navigate(nextPathName);
        }
      },
      onSignIn,
    });

    // TODO: Need to find the solution to call this method
    // history.listen(onParentNavigate);

    return () => {};
  }, []);

  return <div ref={ref} />;
};

export default AuthFE;
