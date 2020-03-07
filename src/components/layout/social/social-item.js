import React from 'react';
import PropTypes from 'prop-types';

const SocialItem = ({ type, ...rest }) => (
  <li className='social-item'>
    <a
      aria-label={`Link to ${type}`}
      {...rest}
      target='_blank'
      rel='noopener noreferrer'
    >
      <i className={`fab fa-${type}`} aria-hidden='true'></i>
    </a>
  </li>
);

SocialItem.propTypes = {
  type: PropTypes.string.isRequired
};

export default SocialItem;
