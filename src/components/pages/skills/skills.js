import React from 'react';
import ProgressBar from '../../layout/progress-bar';
import Spinner from '../../layout/spinner';
import useFetch from '../../../hooks/useFetch';
import './skills.css';

const Skills = () => {
  const { response, loading } = useFetch('/skills.json');

  return (
    <>
      <h2 className='section-title'>Skills</h2>
      <ul className='skills-list'>
        {loading && <Spinner />}
        {response &&
          response.map(skill => (
            <li className='skill-item' key={skill.id}>
              <ProgressBar data={skill} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Skills;
