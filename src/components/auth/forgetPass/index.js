/**
 * Created by qoder on 16/6/6.
 */
import React from 'react';
import AuthTit from '../authTitle';
import {Link} from 'react-router';
import {verifyEmail} from '../../../library/verify';
import goto from '../../../library/changeHash';
import API from '../../../api/requsetConfig';
import 'whatwg-fetch';

const ForgetPassBox = React.createClass({
  handleForgetPass:function () {
    var _this=this;
    if(!verifyEmail(_this.refs.forgetPassEm.value)){
      _this.isTips('邮箱格式不合法',2000);
    }else{
      const options={
        email:_this.refs.forgetPassEm.value
      };
      _this.loading();
      fetch(API.forgetPass,{
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
          if(json.code===10000||json.code===10002){
            _this.isTips(json.data.msg,2000);
            _this.refs.forgetPassEm.value="";
          }else{
            _this.isTips(json.data.msg,2000);
          }
        })
    }
  },
  isTips:function (tip,time) {
    var timer=null;
    clearTimeout(timer);
    const {showTips,hideTips}=this.props.action;
    showTips(tip);
    timer=setTimeout(this.props.action.hideTips,time);
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
        <AuthTit title="忘记密码"/>
        <div className="form-inner">
          <form className="form-float-label" accept-charset="UTF-8">
            <div className="form-group">
              <input
                ref="forgetPassEm"
                className="form-control"
                     autofocus="autofocus"
                     placeholder="请输入您的电子邮箱"
                     type="email"/>
            </div>
            <div className="form-group action">
              <a
                onClick={this.handleForgetPass}
                className="btn btn-block login-btn">发送重置密码邮件</a>
            </div>
          </form>

          <div className="help-section">
             <span className="btn-alternative">
              <Link to="/auth/login">我是老用户,要登录</Link>
            </span>
            <span className="btn-alternative">
              <Link to="/auth/register">注册</Link>
            </span>
            <Link to="/auth/reSendEmail">重新发送激活邮件</Link>
          </div>
        </div>
      </div>
    )
  }
});


export default ForgetPassBox;
