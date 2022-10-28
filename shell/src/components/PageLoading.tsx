import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const PageLoading = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PropagateLoader color="#36d7b7" />
    </div>
  );
};

export default PageLoading;
