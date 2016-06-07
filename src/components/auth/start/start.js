/**
 * Created by qoder on 16-5-15.
 */
import  React from 'react';
require('./start.css');
import AuthTit from '../authTitle';
import ReadMore from '../ReadMore';
import {Link} from 'react-router';
const AuthStart = React.createClass({
  render: function () {
    return (
      <div>
        <AuthTit title="注册登陆"/>
        <div className="form-inner">
          <form className="form-float-label" accept-charset="UTF-8">
            <div className="form-group action">
              <Link className="btn btn-block login-btn" to="/auth/login">登录</Link>
            </div>
          </form>
          <div className="help-section">
            <span className="btn-alternative">
              <Link to="/auth/register">注册</Link>
            </span>
            <Link to="/auth/forgetPass">忘记密码</Link>
            <Link to="/auth/reSendEmail">重新发送激活邮件</Link>
          </div>
        </div>
      </div>
    )
  }
});

export default AuthStart;
