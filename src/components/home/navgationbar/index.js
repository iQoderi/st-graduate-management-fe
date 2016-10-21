/**
 * Created by qoder on 16-6-4.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import {logout, gotoLogin, gotoReg} from '../../../library/logout';
require('./index.css');

class NavgationBar extends Component {
  constructor(props) {
    super(props);
    this.showDropMenu = this.showDropMenu.bind(this);
    this.hideDropMenu = this.hideDropMenu.bind(this);
    this.handleDropMenu = this.handleDropMenu.bind(this);
  }

  showDropMenu() {
    this.props.action.showPhoneMenu();
  }

  hideDropMenu() {
    this.props.action.hidePhoneMenu();
  }

  handleDropMenu() {
    const {phoneMenu}=this.props;
    if (phoneMenu) {
      this.hideDropMenu();
    } else {
      this.showDropMenu();
    }
  }

  render() {
    return (
      <div className="border-bottom">
        <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom: 0}}>
          <div className="navbar-header">
            <a
              href="javascript:;"
              className="navbar-minimalize minimalize-styl-2 btn btn-primary ">
              <i className="fa fa-bars"/>
            </a>
            <Link to="/" className="homepage-link">
              NEUQ大学生就业择业数据平台
            </Link>
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
          <span style={{paddingLeft: '10px'}}>
             <Link to="/">
               NEUQ大学生就业择业数据平台
             </Link>
          </span>
          <i className="fa fa-navicon close-icon" onClick={this.handleDropMenu}/>
        </nav>
      </div>
    )
  }
}


export default NavgationBar;
