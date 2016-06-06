/**
 * Created by qoder on 16-6-5.
 */
import React from 'react';
import {Link} from 'react-router';
const PersonalItem=React.createClass({
  render:function () {
    return (
      <li>
        <Link className="J_menuItem" to="/home/personal" activeClassName="navActive">
          <i className="fa fa-user"/>
          <span className="nav-label">个人中心</span></Link>
      </li>
    )
  }
});

export  default PersonalItem;
