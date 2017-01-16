import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import { inject, observer } from 'mobx-react';
import Main from './pages/main';

export default (
  <Route path="/">
    <IndexRoute component={Main} />
  </Route>
);
