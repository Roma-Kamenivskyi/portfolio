import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../../layout/portfolio-item';
import withData from '../../hoc-helpers/with-data';
import './portfolio.css';

const Portfolio = ({ data }) => {
  return (
    <>
      <ul className='portfolio-list'>
        {data.map(work => {
          return (
            <li className='flip' key={work.id}>
              <PortfolioItem data={work} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
const title = <h2 className='section-title'>Portfolio</h2>;

Portfolio.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default withData(Portfolio, '/works.json', title);
