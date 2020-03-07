import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Skills from './pages/skills';
import Contacts from './pages/contacts';
import NotFound from './pages/not-found';

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/skills' component={Skills} />
    <Route path='/contacts' component={Contacts} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;
