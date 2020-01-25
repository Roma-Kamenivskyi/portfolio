import React from 'react';

export const Reference = ({ children, ...rest }) => (
  <a {...rest} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
);
