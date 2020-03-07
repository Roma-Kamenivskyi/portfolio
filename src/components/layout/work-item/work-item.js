import React from 'react';
import PropTypes from 'prop-types';

import { Reference } from '../../common/reference';

import './work-item.css';

const WorkItem = ({ title, image, skills, link, repository }) => (
  <li className='flip'>
    <div className='work-item'>
      <img className='work-face' src={image} alt={title} />
      <div className='work-descr work-face back'>
        <Reference href={link} className='work-title'>
          {title}
        </Reference>
        <p className='work-skills'>{skills}</p>
        <Reference href={repository} className='work-repo'>
          Repository
        </Reference>
      </div>
    </div>
  </li>
);

WorkItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  skills: PropTypes.string,
  link: PropTypes.string,
  repository: PropTypes.string
};
export default WorkItem;
