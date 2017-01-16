import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'mobx-react';
import routes from './routes';
import Stores from './store';

ReactDOM.render(
  <Provider {...Stores}>
    <Router routes={routes} history={hashHistory} />
  </Provider>
, document.getElementById('app'));
