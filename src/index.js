import React from 'react';
import { render } from 'react-dom';
import store, { history } from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const target = document.getElementById('root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  target);
registerServiceWorker();
