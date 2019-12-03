import React from 'react';

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
