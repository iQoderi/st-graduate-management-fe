/**
 * Created by everyun on 16/5/14.
 */
import React from 'react';
import {Link} from 'react-router';
import AuthTit from '../authTitle';


const RegBox=React.createClass({
  render: function () {
    return (
      <div>
        <AuthTit title="立即注册"/>
        <div className="form-inner">
          <form className="form-float-label" accept-charset="UTF-8">
            <div className="form-group">
              <input className="form-control" autofocus="autofocus" placeholder="邮箱" type="email"/>
            </div>

            <div className="form-group">
              <input className="form-control" autocomplete="off" placeholder="密码" type="password"/>
            </div>
            <div className="form-group action">
              <button className="btn btn-block login-btn">注册</button>
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
