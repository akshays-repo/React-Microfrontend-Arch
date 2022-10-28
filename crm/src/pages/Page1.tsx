import React from "react";
import { Link } from "react-router-dom";
import { Counter } from "../feature/Counter";

export function Page1() {
  return (
    <React.Fragment>
      <div>WElcome to CRM page one </div>
      <Link to="/page-2">Go to Page 2</Link>
      <a href="/auth/dashboard"> Login </a>
    </React.Fragment>
  );
}
