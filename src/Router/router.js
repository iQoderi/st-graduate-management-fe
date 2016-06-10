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
import ForgetPassBox from '../components/auth/forgetPass';
import SendEmailSuccess from '../components/auth/SendEmailSuccess';
import SendNewEmail from '../components/auth/reSendEmail';
import {Router, Route, hashHistory, IndexRoute, browserHistory} from 'react-router';
import ResetPass from  '../components/auth/resetPass';

import CompleteMsg from  '../components/auth/completeMsg';
import Home from '../components/home/homePage';
import PersonalCenter from  '../components/home/content/personal';
import ImportExcelBox from  '../components/home/content/importExcel';
import ExportExcelBox from  '../components/home/content/exportExcel';
import AdminList from  '../components/home/content/adminList';
import AddAdmin from  '../components/home/content/addAdmin';
import QueryMsg from  '../components/home/content/queryStudent';

const RouterApp = React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/auth" component={AuthBox}>
            <Route path="start" component={AuthStart}/>
            <Route path="login" component={AuthLogin}/>
            <Route path="register" component={AuthReg}/>
            <Route path="forgetPass" component={ForgetPassBox}/>
            <Route path="resetPass" component={ResetPass}/>
            <Route path="reSendEmail" component={SendNewEmail}/>
          </Route>
          <Route path="/registration/success" component={SendEmailSuccess}/>
          <Route path="/user/CompleteMsg" component={CompleteMsg}/>
          <Route path="/home" component={Home}>
            <Route path="personal" component={PersonalCenter}/>
            <Route path="importMsg" component={ImportExcelBox}/>
            <Route path="exportMsg" component={ExportExcelBox}/>
            <Route path="queryMsg" component={QueryMsg}/>
            <Route path="adminList" component={AdminList}/>
            <Route path="addAdmin" component={AddAdmin}/>
          </Route>
        </Route>
      </Router>
    )
  }
});

export  default RouterApp;
