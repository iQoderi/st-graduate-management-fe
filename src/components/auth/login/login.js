/**
 *
 * Created by everyun on 16/5/14.
 */
import React from 'react';
import AuthTit from '../authTitle';
import {Link} from 'react-router';
import 'whatwg-fetch';
import API from '../../../api/requsetConfig';
import MD5 from 'md5';
require('./loginBox.css');

const LoginBox = React.createClass({
  handleLogin: function () {
    var _this=this;
    const {showTips,hideTips}=this.props.action;
    const emailRgx=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g;
    const matchEmail=this.refs.loginEmail.value.match(emailRgx);
    const matchPass=this.refs.loginPass.value.length>=6;
    if(!matchEmail){
      _this.isTips('邮箱格式不合法',2000);
    }else{
      if(!matchPass){
        _this.isTips('密码格式不合法，最短六位',2000);
      }else{
        var options={
          email:this.refs.loginEmail.value,
          password:MD5(this.refs.loginPass.value)
        };
        _this.loading();
        fetch(API.login,{
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(options)
        })
          .then(function (res) {
            return res.json()
          })
          .then(function (json) {
            _this.loaded();
            if(json.code===10000){
              _this.isTips(json.data.Msg,2000);
              setTimeout(function () {
                window.location.hash='#/user/CompleteMsg';
              },1000);
            }else{
              _this.isTips(json.data.Msg,2000);
            }
          });
      }
    }
  },
  isTips:function (tip,time) {
    clearTimeout(timer);
    const {showTips,hideTips}=this.props.action;
    showTips(tip);
    var timer=setTimeout(this.props.action.hideTips,time);
  },
  loading:function () {
    const {showLoading}=this.props.action;
    showLoading();
  },
  loaded:function () {
    const {hideLoading}=this.props.action;
    hideLoading();
  },
  render: function () {
    return (
      <div>
        <AuthTit title="登陆"/>
        <div className="form-inner">
          <form className="form-float-label"  accept-charset="UTF-8">
            <div className="form-group">
              <input className="form-control"
                     autofocus="autofocus"
                     ref="loginEmail"
                     placeholder="邮箱"
                     type="email"/>
            </div>

            <div className="form-group">
              <input className="form-control"
                     ref="loginPass"
                     autocomplete="off"
                     placeholder="密码"
                     type="password"/>
            </div>
            <div className="form-group action">
              <button className="btn btn-block login-btn" onClick={this.handleLogin}>登录</button>
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
