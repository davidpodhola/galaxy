import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';

// needed by Material-UI
injectTapEventPlugin();

ReactDOM.render(routes, document.getElementById('app'))
