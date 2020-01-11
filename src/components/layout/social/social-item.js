import React from 'react';
import PropTypes from 'prop-types';

const SocialItem = ({ href = '', type }) => {
  return (
    <li className='social-item'>
      <a
        href={href}
        aria-label={`Link to ${type}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className={`fab fa-${type}`} aria-hidden='true'></i>
      </a>
    </li>
  );
};

SocialItem.propTypes = {
  href: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default SocialItem;
