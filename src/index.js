import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import {Router, Route, hashHistory, IndexRoute,browserHistory} from 'react-router';
const HotelFilter = require('./components/hotelFilter/hotelFilter');
const HotelList = require('./components/hotelList/hotelList');

// Render the main component into the dom
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="/hotelFilter" name='hotelFilter' component={HotelFilter}/>
        <Route path="/hotelList" name='hotelList' component={HotelList}/>
    </Route>
  </Router>
, document.getElementById('app'));
