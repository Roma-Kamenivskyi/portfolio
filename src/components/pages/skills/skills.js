import React from 'react';
import Spinner from '../../layout/spinner';
import SkillsList from '../../layout/skills-list';
import useFetch from '../../../hooks/use-fetch';
import './skills.css';

const Skills = () => {
  const { loading, response } = useFetch('/skills.json');

  return (
    <>
      <h2 className='section-title'>Skills</h2>
      <ul className='skills-list'>
        {loading && <Spinner />}
        <SkillsList data={response} />
      </ul>
    </>
  );
};

export default Skills;
