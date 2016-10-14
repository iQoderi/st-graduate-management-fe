/**
 * Created by qoder on 16-6-4.
 */
import React from 'react';
require('./index.css');
import {logout, gotoLogin, gotoReg} from '../../../library/logout';
const NavgaionBar = React.createClass({
  render: function () {
    return (
      <div className="border-bottom">
        <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom: 0}}>
          <div className="navbar-header"><a className="navbar-minimalize minimalize-styl-2 btn btn-primary ">
            <i className="fa fa-bars"/></a>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
              <a
                onClick={gotoLogin}
                className="dropdown-toggle count-info" data-toggle="dropdown" href="javascript:;">
                <i className="fa fa-lock"/>
                登陆
              </a>
            </li>
            <li className="dropdown">
              <a
                onClick={gotoReg}
                className="dropdown-toggle count-info" data-toggle="dropdown" href="javascript:;">
                <i className="fa fa-registered"/>
                注册
              </a>
            </li>
            <li className="dropdown">
              <a
                onClick={logout}
                className="dropdown-toggle count-info" data-toggle="dropdown" href="javascript:;">
                <i className="fa fa-sign-out"/>
                退出
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-phone">
          <i className="fa fa-navicon close-icon"></i>
        </nav>
      </div>
    )
  }
});


export default NavgaionBar;
