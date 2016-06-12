/**
 * Created by everyun on 16/5/14.
 */
import React from 'react';

import {Link} from 'react-router';
import AuthTit from '../authTitle';
import api from '../../../api/api';
import 'whatwg-fetch';
const md5 = require('md5');


const RegBox = React.createClass({
  handleReg: function () {
    const emailReg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    var email = this.refs.loginEmail.value;
    var password = this.refs.loginPass.value;
    if (email.match(emailReg)) {
      if (password.length < 6) {
        alert('密码最短6位');
      } else {
        fetch(api.register, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: md5(password)
          })
        })
          .then(function (res) {
            
            return res.json();
          }).then(function (json) {
          console.log(json);
        })
      }
    } else {
      alert('邮箱格式不合法');
    }
  },
  render: function () {
    return (
      <div>
        <AuthTit title="立即注册"/>
        <div className="form-inner">
          <form className="form-float-label" accept-charset="UTF-8">
            <div className="form-group">
              <input className="form-control"
                     ref="loginEmail"
                     autofocus="autofocus" placeholder="邮箱" type="email"/>
            </div>

            <div className="form-group">
              <input className="form-control"
                     ref="loginPass"
                     autocomplete="off" placeholder="密码,最短6位" type="password"/>
            </div>
            <div className="form-group action">
              <button
                onClick={this.handleReg}
                className="btn btn-block login-btn">注册
              </button>
            </div>
          </form>
          <div className="help-section">
            <span className="btn-alternative">
              <Link to="/auth/login">我是老用户,要登陆</Link>
            </span>
          </div>
        </div>
      </div>
    )
  }
});


export default RegBox;
