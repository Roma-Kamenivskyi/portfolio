import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ data: { skill, percent } }) => {
  return (
    <div className="progress">
      <div className="progress-value" style={{ width: percent }}>
        {skill}
      </div>
      <span className="progress-skill-name">{skill}</span>
      <span className="progress-percent">{percent}</span>
    </div>
  );
};

export default ProgressBar;
