/**
 * Created by qoder on 16-6-7.
 */
import React from 'react';
import {Link} from 'react-router';
import AuthTit from '../authTitle';
require('./index.css');
const airPlane = require('../../../images/airplane.png');
const SendEmailSuccss = React.createClass({
  render: function () {
    return (
      <div className="form-container">
        <AuthTit title="注册成功"/>
        <p className="email-tips">
          <img src={airPlane}/>
          <br/>
          <br/>
          一封带有确认链接的邮件已经发送至您的邮箱，请检查邮箱（包括垃圾邮箱），并点击该链接激活您的账号。
        </p>
        <div className="form-inner">
          <div className="help-section" style={{textAlign:'center'}}>
            <span className="btn-alternative">
              <Link to="/auth/login">返回登录页面</Link>
            </span>
            <Link to="/auth/reSendEmail">重新发送激活邮件</Link>
          </div>
        </div>
      </div>
    )
  }
});

export default SendEmailSuccss;

