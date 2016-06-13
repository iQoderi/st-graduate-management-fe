/**
 * Created by everyun on 16/5/14.
 */
import React from 'react';
import {Link} from 'react-router';
import AuthTit from '../authTitle';
import API from '../../../api/requsetConfig';
import 'whatwg-fetch';
import MD5 from 'md5';

const RegBox=React.createClass({
  handleReg:function () {
    var _this=this;
    const {showTips,hideTips}=this.props.action;
    const emailRgx=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g;
    const matchEmail=this.refs.regEmail.value.match(emailRgx);
    const matchPass=this.refs.regPass.value.length>=6;
    if(!matchEmail){
      _this.isTips('邮箱格式不合法',2000);
    }else{
      if(!matchPass){
        _this.isTips('密码格式不合法，最短六位',2000);
      }else{
        var options={
          email:this.refs.regEmail.value,
          password:MD5(this.refs.regPass.value)
        };
        _this.loading();
        fetch(API.reg,{
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
              _this.isTips(json.data.Msg,2000);
              setTimeout(function () {
                window.location.hash='#/registration/success';
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
        <AuthTit title="立即注册"/>
        <div className="form-inner">
          <form className="form-float-label" accept-charset="UTF-8">
            <div className="form-group">
              <input className="form-control"
                     autofocus="autofocus"
                     placeholder="邮箱"
                     ref="regEmail"
                     type="email"/>
            </div>
            <div className="form-group">
              <input className="form-control"
                     autocomplete="off"
                     ref="regPass"
                     placeholder="密码"
                     type="password"/>
            </div>
            <div className="form-group action">
              <button className="btn btn-block login-btn" onClick={this.handleReg}>注册</button>
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
