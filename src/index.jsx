import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getStore from './modules/store';
import Root from './components/Root';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  global.document.getElementById('app'),
);
