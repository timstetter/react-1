import React from "react";

// simple component to simulate data loading from server for async redux thunk dispatch

export const Loading = () => {
  return (
    <div className="col">
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
      <p>Loading...</p>
    </div>
  );
};
