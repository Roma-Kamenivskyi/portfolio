import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ data: { skill, percent } }) => {
  return (
    <div className="progress">
      <div className="progress-value" style={{ width: percent }}>
        {skill}
      </div>
    </div>
  );
};

export default ProgressBar;
