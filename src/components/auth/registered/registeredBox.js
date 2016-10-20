/**
 * Created by everyun on 16/5/14.
 */
import React from 'react';
import {Link} from 'react-router';
import AuthTit from '../authTitle';
import {verifyEmail,verifyPass} from '../../../library/verify';
import goto from '../../../library/changeHash';
import API from '../../../api/requsetConfig';
import 'whatwg-fetch';
import MD5 from 'md5';

const RegBox = React.createClass({
  handleReg: function () {
    var _this = this;
    if (!verifyEmail(this.refs.regEmail.value)) {
      _this.isTips('邮箱格式不合法', 2000);
    } else {
      if (!verifyPass(this.refs.regPass.value)) {
        _this.isTips('密码格式不合法，6-16位数字字母下划线', 2000);
      } else {
        var options = {
          email: this.refs.regEmail.value,
          password: MD5(this.refs.regPass.value)
        };
        _this.loading();
        fetch(API.reg, {
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
            if (json.code === 10000 || json.code === 10002) {
              _this.isTips(json.data.Msg, 2000);
              goto('/registration/success',1000);
            } else {
              _this.isTips(json.data.Msg, 2000);
            }
          });
      }
    }
  },
  isTips: function (tip, time) {
    var timer=null;
    const {showTips, hideTips}=this.props.action;
    clearTimeout(timer);
    showTips(tip);
    timer = setTimeout(this.props.action.hideTips, time);
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
        <AuthTit title="立即注册"/>
        <div className="form-inner">
          <form
            onSubmit={()=>{return false}}
            className="form-float-label"
            accept-charset="UTF-8">
            <div className="form-group">
              <input className="form-control"
                     autofocus="autofocus"
                     placeholder="请输入您的邮箱地址"
                     ref="regEmail"
                     type="email"/>
            </div>
            <div className="form-group">
              <input className="form-control"
                     autoComplete="off"
                     ref="regPass"
                     placeholder="密码(6-16位数字字母下划线)"
                     type="password"/>
            </div>
            <div className="form-group action">
              <a className="btn btn-block login-btn" onClick={this.handleReg}>注册</a>
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
