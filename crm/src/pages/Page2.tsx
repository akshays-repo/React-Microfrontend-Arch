import React from "react";
import { Link } from "react-router-dom";

export function Page2() {
  return (
    <React.Fragment>
      <div>Welcome to CRM page one </div>
      <Link to="/page-1">Go to Page 2</Link>
    </React.Fragment>
  );
}
