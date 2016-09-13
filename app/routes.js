import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from './containers/app';
import LoginContainer from './containers/login';
import Home from './containers/Home';

const First = () => (
    <div>{"First"}</div>
);

const Second = () => (
    <div>{"Second"}</div>
);

export default(
    <Router history={hashHistory}>
        <Route name="app" path="/" component={App}>
            <IndexRoute name="login" component={LoginContainer}/>
             <Route name = "home" path='/home' component={Home}>
                 <Route path='/first' component={First}/>
                 <Route path='/second' component={Second}/>
             </Route>
        </Route>
    </Router>
);
