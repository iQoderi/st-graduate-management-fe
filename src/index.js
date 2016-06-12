import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from  'react-redux';
import * as actionApp from './actions/neuqst.actions';
require('./styles/reset.css');

import RouterApp from  './Router/router';

import configureStore from './stores';
const store = configureStore();

setTimeout(function () {
  store.dispatch(actionApp.showTips(1));
},5000);

// Render the main component into the dom
const rootElement = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <RouterApp/>
  </Provider>
  , rootElement);
