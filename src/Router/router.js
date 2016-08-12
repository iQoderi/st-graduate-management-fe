/**
 *
 * Created by qoder on 16-6-4.
 */
import React from 'react';

// import App from '../components/GraduateApp';
import App from '../containers/App';

import AuthBox from  '../components/auth/auth';
import AuthStart from  '../components/auth/start/start';
import AuthReg from  '../containers/auth/reg.container.js';
import AuthLogin from  '../containers/auth/login.container';
import ForgetPassBox from '../containers/auth/forgetPass.container';
import SendEmailSuccess from '../components/auth/SendEmailSuccess';
import SendNewEmail from '../containers/auth/reSendEmail.container';
import ResetPass from  '../containers/auth/resetPassByEm.contaier';
import CompleteMsg from  '../containers/auth/completeMsg.container';
import {Router, Route, hashHistory, IndexRoute, browserHistory} from 'react-router';

import Home from '../components/home/homePage';
import PersonalCenter from  '../containers/home/personalCenter.container';
import ImportExcelBox from  '../components/home/content/importExcel';
import ExportExcelBox from  '../containers/home/exportExcel.container';
import AdminList from  '../containers/home/adminList.container';
import AddAdmin from  '../containers/home/addAdmin.container';
import AddGraduate from '../containers/home/addGraduate.container';
import QueryMsg from  '../containers/home/queryStu.container';
import goto from '../library/changeHash';
import {gotoLogin} from '../library/logout';

const RouterApp = React.createClass({
  ifSendEmail: function () {
    if (window.location.href.split('?id=').length < 2) {
      alert('请先发送重置密码邮件');
      goto('/auth/forgetPass');
    }
  },
  ifLogin: function () {
    if (!localStorage.getItem('neuqst.token')) {
      alert('您还未登陆，请先登陆');
      gotoLogin();
    }
  },
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} onEnter={this.ifLogin}/>
          <Route path="/auth" component={AuthBox}>
            <Route path="start" component={AuthStart}/>
            <Route path="login" component={AuthLogin}/>
            <Route path="register" component={AuthReg}/>
            <Route path="forgetPass" component={ForgetPassBox}/>
            <Route path="resetPass" component={ResetPass} onEnter={this.ifSendEmail}/>
            <Route path="reSendEmail" component={SendNewEmail}/>
          </Route>
          <Route path="/registration/success" component={SendEmailSuccess}/>
          <Route path="/user/CompleteMsg" component={CompleteMsg} onEnter={this.ifLogin}/>
          <Route path="/home" component={Home} onEnter={this.ifLogin}>
            <Route path="personal" component={PersonalCenter}/>
            <Route path="importMsg" component={ImportExcelBox}/>
            <Route path="exportMsg" component={ExportExcelBox}/>
            <Route path="queryMsg" component={QueryMsg}/>
            <Route path="adminList" component={AdminList}/>
            <Route path="addAdmin" component={AddAdmin}/>
            <Route path="addGraduate" component={AddGraduate}/>
          </Route>
        </Route>
      </Router>
    )
  }
});


export  default RouterApp;
