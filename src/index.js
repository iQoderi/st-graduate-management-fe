import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
require('./styles/reset.css');

import RouterApp from  './Router/router';

// Render the main component into the dom
const  rootElement=document.getElementById('app');
ReactDOM.render(
  <RouterApp/>
  ,rootElement);
