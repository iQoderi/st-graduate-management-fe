/**
 *
 * Created by everyun on 16/5/14.
 */
import React from 'react';
import AuthTit from '../authTitle';
import {Link} from 'react-router';
require('./loginBox.css');

const LoginBox = React.createClass({
  getInitialState: function () {
    return {
      username: '',
      password: ''
    }
  },
  handelInput: function (e) {
    if (e.target.type === 'text') {
      this.setState({
        username: e.target.value
      })
    } else {
      this.setState({
        password: e.target.value
      })
    }
  },
  handleLogin: function () {
    fetch(apiHost + '/login', {
      method: 'POST',
      body: this.state
    })
      .then(function (res) {
        console.log(res);
      })
    
  },
  render: function () {
    return (
      <div>
        <AuthTit title="登陆"/>
        <div className="form-inner">
          <form className="form-float-label"  accept-charset="UTF-8">
            <div className="form-group">
              <input className="form-control" autofocus="autofocus" placeholder="邮箱" type="email"/>
            </div>

            <div className="form-group">
              <input className="form-control" autocomplete="off" placeholder="密码" type="password"/>
            </div>
            <div className="form-group action">
              <button className="btn btn-block login-btn">登录</button>
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


export default LoginBox;
