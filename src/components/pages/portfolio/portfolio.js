import React from 'react';
import WorksList from '../../layout/works-list';
import Spinner from '../../layout/spinner';
import useFetch from '../../../hooks/use-fetch';
import './portfolio.css';

const Portfolio = () => {
  const { response, loading } = useFetch('/works.json');

  return (
    <>
      <h2 className='section-title'>Portfolio</h2>
      <ul className='works-list'>
        {loading && <Spinner />}
        <WorksList list={response} />
      </ul>
    </>
  );
};

export default Portfolio;
