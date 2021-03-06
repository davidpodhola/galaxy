import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';

const First = () => (
    <div>{"First"}</div>
);

const Second = () => (
    <div>{"Second"}</div>
);

// const routes = (
//     <Router history={hashHistory}>
//         <Route name="app" path="/" component={App}>
//             <IndexRoute name="login" component={LoginContainer}/>
//              <Route name = "home" path='/home' component={HomeContainer}>
//                  <Route path='/first' component={First}/>
//                  <Route path='/second' component={Second}/>
//              </Route>
//         </Route>
//     </Router>
// );

const LoginContainerWrapper = function () {
     return (
         <LoginContainer refs="login" />
     );
   }

const routes = (
    <Router history={hashHistory}>
        <Route name="app" path="/" component={App}>
            <IndexRoute name="login" component={LoginContainerWrapper}/>
            <Route name = "home" path='/home' component={HomeContainer}/>
        </Route>
    </Router>
);

export default routes;
