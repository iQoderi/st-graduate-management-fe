/**
 * Created by qoder on 16-6-5.
 */
/**
 * Created by qoder on 16-6-5.
 */

import React from 'react';
import {Link} from  'react-router';

const ImportExcelItem=React.createClass({
  render:function () {
    return (
      <li>
        <Link className="J_menuItem" to="home/importMsg">
          <i className="fa fa-upload"/>
          <span className="nav-label">导入学生信息</span></Link>
      </li>
    )
  }
});

export  default ImportExcelItem;
