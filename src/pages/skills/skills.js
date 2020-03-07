import React from 'react';

import Spinner from '../../components/layout/spinner';
import SkillsList from '../../components/layout/skills-list';

import useFetch from '../../hooks/use-fetch';

import './skills.css';

const Skills = () => {
  const { loading, response } = useFetch('/skills.json');

  return (
    <>
      <h2 className='section-title'>Skills</h2>
      <ul className='skills-list'>
        {loading ? <Spinner /> : <SkillsList data={response} />}
      </ul>
    </>
  );
};

export default Skills;
