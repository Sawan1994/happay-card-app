import React from "react";
import { ReactComponent as BackIcon } from "../../assets/long-arrow-alt-left-solid.svg";
import { Link } from "react-router-dom";

export default function Back() {
  return (
    <Link to="/">
      <div className="back">
        <BackIcon />
        <span>Back to Home</span>
      </div>
    </Link>
  );
}
