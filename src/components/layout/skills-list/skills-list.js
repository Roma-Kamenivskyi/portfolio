import React from 'react';
import PropTypes from 'prop-types';

import ProgressBar from '../progress-bar';

const SkillsList = ({ data }) => {
  return (
    data &&
    data.map(skill => (
      <li className='skill-item' key={skill.id}>
        <ProgressBar data={skill} />
      </li>
    ))
  );
};

SkillsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default SkillsList;
