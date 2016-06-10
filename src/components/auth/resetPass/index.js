/**
 * Created by qoder on 16/6/11.
 */
import React from 'react';
import AuthTit from '../authTitle';
import {Link} from 'react-router';


const ResetPass = React.createClass({
  render: function () {
    return (
      <div>
        <AuthTit title="重置密码"/>
        <div className="form-inner">
          <form className="form-float-label" accept-charset="UTF-8">
            <div className="form-group">
              <input className="form-control" autofocus="autofocus" placeholder="输入新密码(最少六位)" type="password"/>
            </div>
            <div className="form-group">
              <input className="form-control" autofocus="autofocus" placeholder="再次输入新密码" type="password"/>
            </div>
            <div className="form-group action">
              <button className="btn btn-block login-btn">确认重置密码</button>
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
