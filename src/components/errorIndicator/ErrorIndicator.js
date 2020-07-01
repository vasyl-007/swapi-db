import React from "react";
import "./ErrorIndicator.css";
import errorIcon from "./error_icon.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img className="error-icon" src={errorIcon} alt="Error icon" />
      <span className="boom">BOOM!</span>
      <span className="boom">something was wrong</span>
      <span className="boom">Now we are trying to fix this problem</span>
    </div>
  );
};

export default ErrorIndicator;
