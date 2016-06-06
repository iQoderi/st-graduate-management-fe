/**
 * Created by qoder on 16/6/6.
 */
import React from 'react';
import {Link} from 'react-router';
var yeoman = require('../../../images/yeoman.png');


const ForgetPassBox=React.createClass({
  render: function () {
    return (
      <div className="auth-box">
        <img className="ibig-logo" src={yeoman}/>
        <div className="auth-form login-form">
          <h3 className="title">忘记密码</h3>
          <input type="text"
                 className="input w-input"
                 placeholder="请输入邮箱账号"/>
          <button className="btn w-btn b-btn">
            发送重置密码邮件
          </button>

          <div className="status">
            <Link to="auth/register">立即注册</Link>
            <Link to="auth/login">立即登录</Link>
          </div>
        </div>
      </div>
    )
  }
});


export default ForgetPassBox;
