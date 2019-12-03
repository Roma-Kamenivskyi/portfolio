import React from 'react';
import PropTypes from 'prop-types';
import { Reference } from '../common/Reference';
import './PortfolioItem.css';

const PortfolioItem = ({ data }) => {
  const { title, image, skills, link, id, repository } = data;
  return (
    <li className='flip' key={id}>
      <div className='portfolio-item'>
        <img className='portfolio-face' src={image} alt={title} />
        <div className='portfolio-descr portfolio-face back'>
          <Reference href={link} classes='portfolio-title'>
            {title}
          </Reference>
          <p className='portfolio-skills'>{skills}</p>
          <Reference href={repository} classes='portfolio-repo'>
            Repository
          </Reference>
        </div>
      </div>
    </li>
  );
};

PortfolioItem.propTypes = {
  data: PropTypes.object
};

export default PortfolioItem;
