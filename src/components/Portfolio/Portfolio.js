import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../PortfolioItem';
import Spinner from '../Spinner';
import './Portfolio.css';

const Portfolio = ({ works, loading, getWorks }) => {
  useEffect(() => {
    getWorks();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2 className='section-title'>Portfolio</h2>
      {loading && <Spinner />}
      <ul className='portfolio-list'>
        {works.map(work => {
          return <PortfolioItem data={work} key={work.id} />;
        })}
      </ul>
    </>
  );
};
Portfolio.propTypes = {
  works: PropTypes.array,
  loading: PropTypes.bool,
  getWorks: PropTypes.func
};

export default Portfolio;
