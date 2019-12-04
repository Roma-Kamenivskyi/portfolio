import React from 'react';
import PropTypes from 'prop-types';

export const Reference = ({ children, classes, href }) => {
  return (
    <a
      href={href}
      className={classes}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};

Reference.propTypes = {
  classes: PropTypes.string,
  href: PropTypes.string
};
