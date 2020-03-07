import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Particles from 'react-particles-js';

import Header from '../layout/header';
import ErrorBoundary from '../error-boundary';
import Routes from '../../routes';
import particlesOptions, { particlesStyles } from './particles-options';

import './app.css';

const App = () => (
  <ErrorBoundary>
    <Router>
      <div className='App'>
        <Particles params={particlesOptions} style={particlesStyles} />
        <Header />
        <div className='wrapper'>
          <Routes />
        </div>
      </div>
    </Router>
  </ErrorBoundary>
);

export default App;
