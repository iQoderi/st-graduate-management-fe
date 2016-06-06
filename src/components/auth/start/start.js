/**
 * Created by qoder on 16-5-15.
 */
import  React from 'react';
require('./start.css');
var yeoman = require('../../../images/yeoman.png');

import {Link} from 'react-router';
const AuthStart = React.createClass({
  render: function () {
    return (
      <div className="auth-box">
        <img className="ibig-logo" src={yeoman}/>
        <div className="auth-form start-form">
          <button className="btn w-btn b-btn">
            <Link to="/auth/register">
              注册
            </Link>
          </button>
          <button className="btn w-btn g-btn">
            <Link to="auth/login">
              登录
            </Link>
          </button>
        </div>
      </div>
    )
  }
});

export default AuthStart;
