import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, document.getElementById('app'));
