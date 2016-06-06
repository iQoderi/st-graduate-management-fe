/**
 * Created by qoder on 16-6-5.
 */
import React from 'react';
import {Link} from 'react-router';
const AddAdminItem=React.createClass({
  render:function () {
    return (
      <li>
        <Link className="J_menuItem" to="/home/addAdmin" activeClassName="navActive">
          <i className="fa fa-plus"/>
          <span className="nav-label">添加管理员</span></Link>
      </li>
    )
  }
});

export  default AddAdminItem;
