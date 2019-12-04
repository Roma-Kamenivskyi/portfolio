import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../../layout/progress-bar';
import withData from '../../hoc-helpers/with-data';
import './skills.css';

const Skills = ({ data }) => {
  return (
    <>
      <ul className='skills-list'>
        {data.map(skill => {
          return (
            <li className='skill-item' key={skill.id}>
              <ProgressBar data={skill} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

const title = <h2 className='section-title'>Skills</h2>;

Skills.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default withData(Skills, '/skills.json', title);
