/**
 * Created by qoder on 16-6-5.
 */
import React from 'react';
import {Link} from 'react-router';

const AdminListItem=React.createClass({
  render:function () {
    return (
      <li>
        <Link className="J_menuItem" to="/home/adminList" activeClassName="navActive" >
          <i className="fa fa-lock"/>
          <span className="nav-label">管理员列表</span></Link>
      </li>
    )
  }
});

export  default AdminListItem;
