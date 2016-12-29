import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './pages/home'

console.log(Home)

export default (
  <Route path="/" component={Home} />
);