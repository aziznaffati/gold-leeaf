import React from "react";
import error from "../../assets/error.jpg";
import "./Eroor.css";
const Error = () => {
  return (
    <div className="er">
      <img src={error} alt="Error" width={1000} />
    </div>
  );
};

export default Error;
