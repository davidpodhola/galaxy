import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(routes, document.getElementById('app'))
