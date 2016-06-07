/**
 * Created by qoder on 16-6-7.
 */
import React from 'react';
import AuthTit from '../authTitle';
import {Link} from 'react-router';


const SendNewEmail= React.createClass({
  render: function () {
    return (
      <div>
        <AuthTit title="重新发送激活邮件"/>
        <div className="form-inner">
          <form className="form-float-label" accept-charset="UTF-8">
            <div className="form-group">
              <input className="form-control" autofocus="autofocus" placeholder="邮箱" type="email"/>
            </div>
            <div className="form-group action">
              <button className="btn btn-block login-btn">重新发送激活邮件</button>
            </div>
          </form>
          <div className="help-section">
             <span className="btn-alternative">
              <Link to="/auth/login">我是老用户,要登录</Link>
            </span>
            <span className="btn-alternative">
              <Link to="/auth/register">注册</Link>
            </span>
            <Link to="/auth/forgetPass">忘记密码</Link>
          </div>
        </div>
      </div>
    )
  }
});


export default SendNewEmail;
