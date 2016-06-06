/**
 * Created by qoder on 16-6-4.
 */
import React from 'react';
require('./index.css');
const NavgaionBar = React.createClass({
  render: function () {
    return (
      <div className="border-bottom">
        <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom:0}}>
          <div className="navbar-header"><a className="navbar-minimalize minimalize-styl-2 btn btn-primary ">
            <i className="fa fa-bars"/></a>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
              <a className="dropdown-toggle count-info" data-toggle="dropdown" href="/#/auth/login">
                <i className="fa fa-lock"/>
                登陆
              </a>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle count-info" data-toggle="dropdown" href="/#/auth/register">
                <i className="fa fa-registered"/>
                注册
              </a>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle count-info" data-toggle="dropdown" href="/#/auth/start">
                <i className="fa fa-sign-out"/>
                退出
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
});


export default NavgaionBar;
