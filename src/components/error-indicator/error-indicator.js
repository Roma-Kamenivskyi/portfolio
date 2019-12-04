import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className='error'>
      <i className='fas fa-exclamation-triangle error-icon'></i>
      <p className='error-text'>Something went wrong!</p>
    </div>
  );
};

export default ErrorIndicator;
