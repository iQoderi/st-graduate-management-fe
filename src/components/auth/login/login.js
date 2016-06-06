/**
 *
 * Created by everyun on 16/5/14.
 */
import React from 'react';
import {Link} from 'react-router';
require('./loginBox.css');
var yeoman = require('../../../images/yeoman.png');

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
      <div className="auth-box">
        <img className="ibig-logo" src={yeoman}/>
        <div className="auth-form login-form">
          <h3 className="title">登录</h3>
          <input type="text"
                 className="input w-input"
                 onChange={this.handelInput}
                 value={this.state.username}
                 placeholder="请输入手机号/邮箱账号"/>

          <input type="password"
                 className="input w-input"
                 onChange={this.handelInput}
                 value={this.state.password}
                 placeholder="请输入密码"/>

          <button className="btn w-btn b-btn"
                  onClick={this.handleLogin}>
            登录
          </button>

          <div className="status">
            <Link to="auth/forgetPass">忘记密码</Link>
            <Link to="auth/register">立即注册</Link>
          </div>
        </div>
      </div>
    )
  }
});


export default LoginBox;
