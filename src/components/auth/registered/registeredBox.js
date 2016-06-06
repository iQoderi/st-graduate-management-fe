/**
 * Created by everyun on 16/5/14.
 */
import React from 'react';
import {Link} from 'react-router';
var yeoman = require('../../../images/yeoman.png');


const RegBox=React.createClass({
  render: function () {
    return (
      <div className="auth-box">
        <img className="ibig-logo" src={yeoman}/>
        <div className="auth-form login-form">
          <h3 className="title">注册</h3>
          <input type="text"
                 className="input w-input"
                 placeholder="请输入邮箱账号"/>

          <input type="password"
                 className="input w-input"
                 placeholder="请输入密码"/>

          <button className="btn w-btn b-btn">
            立即注册
          </button>

          <div className="status">
            <Link to="auth/forgetPass">忘记密码</Link>
            <Link to="auth/login">已有账号</Link>
          </div>
        </div>
      </div>
    )
  }
});


export default RegBox;
