import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Portfolio from './components/pages/portfolio';
import Skills from './components/pages/skills';
import Contacts from './components/pages/contacts';
import NotFound from './components/pages/not-found';

const Routes = () => {
  return (
    <div className='wrapper'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/skills' component={Skills} />
        <Route path='/contacts' component={Contacts} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default Routes;
