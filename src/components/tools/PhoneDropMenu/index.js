/**
 * Created by qoder on 16/10/14.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.css';

class PhoneDropMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const adminLinks = [
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


    const stuLinks = [
      {
        path: '/home/personal',
        name: '个人中心'
      },
      {
        path: '/home/queryMsg',
        name: '查询信息'
      }
    ];

    const menuItems=adminLinks.map((link,index)=>{
      return (
        <li key={index}><Link to={link.path}>{link.name}</Link></li>
      )
    });

    return (
      <div className="phone-drop-menu">
        <ul className="drop-menu-list">
          {menuItems}
          <div className="border"></div>
          <li><a href="JavaScript:;">18716037332</a></li>
          <li><Link to="/home/personal">修改密码</Link></li>
          <li><Link to="/auth/start">退出登录</Link></li>
        </ul>
      </div>
    )
  }
}

export default  PhoneDropMenu;
