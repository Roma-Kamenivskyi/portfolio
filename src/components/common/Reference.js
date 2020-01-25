import React from 'react';
import PropTypes from 'prop-types';

export const Reference = ({ children, ...rest }) => (
  <a {...rest} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
);

Reference.propTypes = { children: PropTypes.node.isRequired };
