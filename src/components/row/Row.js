import React from "react";

export const Row = ({ leftSide, rightSide }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{leftSide}</div>
      <div className="col-md-6">{rightSide}</div>
    </div>
  );
};
