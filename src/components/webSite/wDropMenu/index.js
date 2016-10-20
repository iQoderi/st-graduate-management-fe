'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.css';

class WDropMenu extends Component {
  constructor(props) {
    super(props);
    this.hideDropMenu = this.hideDropMenu.bind(this);
  }
  hideDropMenu() {
    this.props.action.hideWPhoneMenu();
  }
    render() {
      const {wphoneMenu}=this.props;
      let  menuLinks = [
        {
          path: '/website/homepage',
          name: '首页'
        },
        {
          path: '/website/introduce',
          name: '平台简介'
        },
        {
          path: '/home/personal',
          name: '个人中心'
        },
        {
          path: '/home/queryMsg',
          name: '查询信息'
        },
        {
          path: '/home/queryMsg',
          name: '查询信息'
        },
        {
          path: '/website/connectUs',
          name: '联系方式'
        }
      ];

      menuLinks= menuLinks.map((link, index)=> {
        return (
          <li
            onClick={this.hideDropMenu}
            key={index}><Link to={link.path}>{link.name}</Link></li>
        )
      });

        return (
            <div
              style={{display: wphoneMenu ? 'block' : 'none'}}
              className="wp-drop-menu phone-drop-menu">
              <ul className="drop-menu-list">
                {menuLinks}
                <div className="border"></div>
                <li onClick={this.hideDropMenu}><Link to="/auth/login">登录</Link></li>
                <li onClick={this.hideDropMenu}><Link to="/auth/register">注册</Link></li>
              </ul>
            </div>
        )
    }
}

export default WDropMenu;
