import React from "react";
import { Link } from "react-router-dom";
import { URLS } from "../router/url";

export function SignUpPage() {
  return (
    <React.Fragment>
      <div>Please fill the form to login </div>
      <Link to={URLS.LOGIN}>Already an account </Link>
    </React.Fragment>
  );
}
