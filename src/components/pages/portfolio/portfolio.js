import React from 'react';
import PortfolioItem from '../../layout/portfolio-item';
import Spinner from '../../layout/spinner';
import useFetch from '../../../hooks/useFetch';
import './portfolio.css';

const Portfolio = () => {
  const { response, loading } = useFetch('/works.json');

  return (
    <>
      <h2 className='section-title'>Portfolio</h2>
      <ul className='portfolio-list'>
        {loading && <Spinner />}
        {response &&
          response.map(work => (
            <li className='flip' key={work.id}>
              <PortfolioItem data={work} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Portfolio;
