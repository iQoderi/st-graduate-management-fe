/**
 *
 * Created by qoder on 16-6-4.
 */
import React from 'react';

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
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Home from '../containers/home/home.container';
import PersonalCenter from  '../containers/home/personalCenter.container';
import ImportExcelBox from  '../containers/home/ImportExcelBox.container';
import ExportExcelBox from  '../containers/home/exportExcel.container';
import AdminList from  '../containers/home/adminList.container';
import AddAdmin from  '../containers/home/addAdmin.container';
import AddGraduate from '../containers/home/addGraduate.container';
import QueryMsg from  '../containers/home/queryStu.container';
import MoreINfo from '../containers/home/moreInfo.container';

//首页
import Website from '../components/webSite';
import WContent from '../components/webSite/wContent';
import WHomepage from '../components/webSite/wContent/homepage';
import WIntroduce from '../components/webSite/wContent/Introduce';
import WConnectUs from '../components/webSite/wContent/connectUs';

const RouterApp = React.createClass({
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
          <Route path="/user/CompleteMsg" component={CompleteMsg}/>
          <Route path="/home" component={Home}>
            <Route path="personal" component={PersonalCenter}/>
            <Route path="importMsg" component={ImportExcelBox}/>
            <Route path="exportMsg" component={ExportExcelBox}/>
            <Route path="queryMsg" component={QueryMsg}/>
            <Route path="adminList" component={AdminList}/>
            <Route path="addAdmin" component={AddAdmin}/>
            <Route path="addGraduate" component={AddGraduate}/>
          </Route>
          <Route path="moreInfo" component={MoreINfo}/>
          <Route path="website" component={Website}>
            <Route path="homepage" component={WHomepage}/>
            <Route path="connectUs" component={WConnectUs}/>
            <Route path="introduce" component={WIntroduce}/>
          </Route>
        </Route>
      </Router>
    )
  }
});


export  default RouterApp;
