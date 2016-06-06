/**
 *
 * Created by qoder on 16-6-4.
 */
import React from 'react';
import App from '../components/GraduateApp';
import AuthBox from  '../components/auth/auth';
import AuthStart from  '../components/auth/start/start';
import AuthLogin from  '../components/auth/login/login';
import AuthReg from  '../components/auth/registered/registeredBox';
import Home from '../components/home/homePage';
import {Router, Route, hashHistory, IndexRoute, browserHistory} from 'react-router';
import Content from '../components/home/content/index';

const RouterApp=React.createClass({
  render:function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/auth" component={AuthBox}>
            <Route path="start" component={AuthStart}/>
            <Route path="login" component={AuthLogin}/>
            <Route path="register" component={AuthReg}/>
          </Route>
          <Router>
            <Route path="home" component={Home}>
              <Route path="personal" compoent={Content}/>
              <Route path="importMsg" compoent={Content}/>
              <Route path="exportMsg" compoent={Content}/>
              <Route path="queryMsg" compoent={Content}/>
              <Route path="adminList" compoent={Content}/>
              <Route path="addAdmin" compoent={Content}/>
            </Route>
          </Router>
        </Route>
      </Router>
    )
  }
});

export default RouterApp;
