import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {inject,observer} from 'mobx-react';
import Main from './pages/main';

let Main1 = ({ field }) => <h1>field {field}</h1>
Main1 = inject(stores=>{
  return {
    field:stores.MainStore.field
  }
})(observer(Main1))
export default (
  <Route path="/">
    <IndexRoute component={Main} />
    <Route path="main1" component={Main1} />
  </Route>
);