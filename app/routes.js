import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import LoginContainer from './containers/login';

export default (
  <Route name="app" path="/" component={App}>
    <IndexRoute name="login" component={LoginContainer} />
  </Route>
);
