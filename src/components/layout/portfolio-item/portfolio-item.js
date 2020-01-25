import React from 'react';
import PropTypes from 'prop-types';
import { Reference } from '../../common/reference';
import './portfolio-item.css';

const PortfolioItem = ({ data }) => {
  const { title, image, skills, link, repository } = data;
  return (
    <div className='portfolio-item'>
      <img className='portfolio-face' src={image} alt={title} />
      <div className='portfolio-descr portfolio-face back'>
        <Reference href={link} className='portfolio-title'>
          {title}
        </Reference>
        <p className='portfolio-skills'>{skills}</p>
        <Reference href={repository} className='portfolio-repo'>
          Repository
        </Reference>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  data: PropTypes.object
};

export default PortfolioItem;
