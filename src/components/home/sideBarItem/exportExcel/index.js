/**
 * Created by qoder on 16-6-5.
 */
import React from 'react';
import {Link} from 'react-router'
require('./index.css');

const ExportExcelItem=React.createClass({
  render:function () {
    return (
      <li>
        <Link className="J_menuItem" to="/home/exportMsg" activeClassName="navActive">
          <i className="fa fa-download"/>
          <span className="nav-label">导出学生信息</span>
        </Link>
      </li>
    )
  }
});

export  default ExportExcelItem;
