/**
 * Created by qoder on 16-6-5.
 */
import React from 'react';
import {Link} from 'react-router';
const SearchItem=React.createClass({
  render:function () {
    return (
      <li>
        <Link className="J_menuItem" to="/home/queryMsg">
          <i className="fa fa-search"/>
          <span className="nav-label">查询信息</span></Link>
      </li>
    )
  }
});

export  default SearchItem;
