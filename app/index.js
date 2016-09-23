import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import rootReducer from './redux/reducers'
import routes from './routes';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
)

// needed by Material-UI
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
    {routes}
</Provider>, document.getElementById('app'))
