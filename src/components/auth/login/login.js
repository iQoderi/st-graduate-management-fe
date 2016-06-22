/**
 *
 * Created by everyun on 16/5/14.
 */
import React from 'react';
import AuthTit from '../authTitle';
import {Link} from 'react-router';
import 'whatwg-fetch';
import API from '../../../api/requsetConfig';
import {verifyEmail, verifyPass} from '../../../library/verify';
import goto from '../../../library/changeHash';
import MD5 from 'md5';

require('./loginBox.css');

const LoginBox = React.createClass({
  handleLogin: function () {
    var _this = this;
    const {showTips, hideTips}=this.props.action;
    if (!verifyEmail(this.refs.loginEmail.value)) {
      _this.isTips('邮箱格式不合法', 2000);
    } else {
      if (!verifyPass(this.refs.loginPass.value)) {
        _this.isTips('密码格式不合法，最短六位', 2000);
      } else {
        var options = {
          email: this.refs.loginEmail.value,
          password: MD5(this.refs.loginPass.value)
        };
        _this.loading();
        fetch(API.login, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(options)
        })
          .then(function (res) {
            return res.json()
          })

          .then(function (json) {
            _this.loaded();
            if (json.code === 10000 || json.code === 90010) {
              if (localStorage) {
                localStorage.setItem('neuqst.token', json.data.token);
              } else {
                alert('您的浏览器不支持localStorage,建议更换浏览器或者更新浏览器');
              }
            }
            if (json.code === 10000) {
              _this.isTips(json.data.Msg, 2000);
              goto('/home', 1000);
              console.log(json);
            } else {
              if (json.code === 90010) {
                _this.isTips(json.data.Msg, 2000);
                goto('/user/CompleteMsg', 1000);
              } else {
                _this.isTips(json.data.Msg, 2000);
              }
            }
          });
      }
    }
  },
  isTips: function (tip, time) {
    clearTimeout(timer);
    const {showTips, hideTips}=this.props.action;
    showTips(tip);
    var timer = setTimeout(this.props.action.hideTips, time);
  },
  loading: function () {
    const {showLoading}=this.props.action;
    showLoading();
  },
  loaded: function () {
    const {hideLoading}=this.props.action;
    hideLoading();
  },
  render: function () {
    return (
      <div>
        <AuthTit title="登陆"/>
        <div className="form-inner">
          <form className="form-float-label" accept-charset="UTF-8">
            <div className="form-group">
              <input className="form-control"
                     autofocus="autofocus"
                     ref="loginEmail"
                     placeholder="请输入您的邮箱地址"
                     type="email"/>
            </div>
            <div className="form-group">
              <input className="form-control"
                     ref="loginPass"
                     autocomplete="off"
                     placeholder="密码(6-16位数字字母下划线)"
                     type="password"/>
            </div>
            <div className="form-group action">
              <a className="btn btn-block login-btn" onClick={this.handleLogin}>登录</a>
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
