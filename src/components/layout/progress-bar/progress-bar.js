import React from 'react';
import PropTypes from 'prop-types';

import './progress-bar.css';

const ProgressBar = ({ data: { skill, percent } }) => (
  <div className='progress'>
    <div className='progress-value' style={{ width: percent }}></div>
    <span className='progress-skill-name'>{skill}</span>
    <span className='progress-percent'>{percent}</span>
  </div>
);

ProgressBar.propTypes = {
  data: PropTypes.shape({
    skill: PropTypes.string,
    percent: PropTypes.string
  })
};
export default ProgressBar;
