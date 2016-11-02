/**
 * Created by qoder on 16/10/14.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import {logout} from '../../../library/logout';
import './index.css';

class PhoneDropMenu extends Component {
  constructor(props) {
    super(props);
    this.hideDropMenu = this.hideDropMenu.bind(this);
    this.showChanPass = this.showChanPass.bind(this);
  }

  hideDropMenu() {
    this.props.action.hidePhoneMenu();
  }

  showChanPass() {
    this.hideDropMenu();
    this.props.action.showChanPass();
  }

  render() {
    const {phoneMenu, myMsg}=this.props;
    var menuLinks = [];
    if (myMsg.role == '管理员') {
      menuLinks = [
        {
          path: '/home/personal',
          name: '个人中心'
        },
        {
          path: '/home/addAdmin',
          name: '添加管理员'
        },
        {
          path: '/home/adminList',
          name: '管理员列表'
        },
        {
          path: '/home/students',
          name: '学生列表'
        },
        {
          path: '/home/addGraduate',
          name: '添加毕业生'
        },
        {
          path: '/home/queryMsg',
          name: '查询信息'
        },
        {
          path: '/home/importMsg',
          name: '导入学生信息'
        },
        {
          path: '/home/exportMsg',
          name: '导出学生信息'
        }
      ];
    } else {
      menuLinks = [
        {
          path: '/home/personal',
          name: '个人中心'
        },
        {
          path: '/home/queryMsg',
          name: '查询信息'
        }
      ];
      if (myMsg.role === '毕业生') {
        menuLinks.splice(1, 0, {
          path: '/moreInfo',
          name: '更多信息'
        });
      }
    }

    const menuItems = menuLinks.map((link, index)=> {
      return (
        <li onClick={this.hideDropMenu}
            key={index}><Link to={link.path}>{link.name}</Link></li>
      )
    });

    return (
      <div className="phone-drop-menu" style={{display: phoneMenu ? 'block' : 'none'}}>
        <ul className="drop-menu-list">
          {menuItems}
          <div className="border"></div>
          <li onClick={this.hideDropMenu}><Link to="/home/personal">{myMsg.email}</Link></li>
          <li onClick={this.hideDropMenu}><a href="javascript:;" onClick={this.showChanPass}>修改密码</a></li>
          <li onClick={this.hideDropMenu}><a href="javascript:;" onClick={logout}>退出登录</a></li>
        </ul>
      </div>
    )
  }
}

export default  PhoneDropMenu;
