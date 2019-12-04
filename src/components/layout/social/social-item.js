import React from 'react';

const SocialItem = ({ href, type }) => {
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

export default SocialItem;
