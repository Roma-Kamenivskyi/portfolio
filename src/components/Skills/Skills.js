import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import Spinner from '../Spinner';
import './Skills.css';

const Skills = ({ skills, loading, getSkills }) => {
  useEffect(() => {
    getSkills();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2 className='section-title'>Skills</h2>
      {loading && <Spinner />}
      <ul className='skills-list'>
        {skills.map(skill => {
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
Skills.propTypes = {
  skills: PropTypes.array,
  loading: PropTypes.bool,
  getSkills: PropTypes.func
};

export default Skills;
