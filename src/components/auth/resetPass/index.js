/**
 * Created by qoder on 16/6/11.
 */
import React from 'react';
import AuthTit from '../authTitle';
import {Link} from 'react-router';
import {verifyPass} from '../../../library/verify';
import goto from '../../../library/changeHash';
import API from '../../../api/requsetConfig';
import 'whatwg-fetch';
import MD5 from 'md5';


const ResetPass = React.createClass({
  handleResetPass:function () {
    var _this=this;
    if(!verifyPass(_this.refs.newPass.value)){
      _this.isTips('密码格式不合法',2000);
    }else{
      if(_this.refs.newPass.value!=_this.refs.reNewPass.value){
        _this.isTips('两次输入密码不一致',2000);
        return false;
      }
      const options={
        password:MD5(_this.refs.newPass.value)
      };
      _this.loading();
      if(window.location.search){
        const search=window.location.search;
        const searcgRgx=/=+[\w,-]*/g;
        var id=search.match(searcgRgx)[0].substr(1);
      }else {
        _this.loaded();
        return false;
      }
      fetch(API.resetPass+'?id='+id,{
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
            _this.isTips(json.data.msg+',请登陆',2000);
            goto('/auth/login',1000);
          }else{
            _this.isTips(json.data.msg,2000);
          }
        })
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
        <AuthTit title="重置密码"/>
        <div className="form-inner">
          <form className="form-float-label" accept-charset="UTF-8">
            <div className="form-group">
              <input
                ref="newPass"
                className="form-control"
                     autofocus="autofocus"
                     placeholder="请输入新密码(6-16位数字字母下划线)" type="password"/>
            </div>
            <div className="form-group">
              <input
                ref="reNewPass"
                className="form-control" autofocus="autofocus" placeholder="再次输入新密码" type="password"/>
            </div>
            <div className="form-group action">
              <a
                onClick={this.handleResetPass}
                className="btn btn-block login-btn">确认重置密码</a>
            </div>
          </form>
          <div className="help-section">
             <span className="btn-alternative">
              <Link to="/auth/login">返回登录</Link>
            </span>
            <span className="btn-alternative">
              <Link to="/auth/register">注册</Link>
            </span>
          </div>
        </div>
      </div>
    )
  }
});

export default ResetPass;
