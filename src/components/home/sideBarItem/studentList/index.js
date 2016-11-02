/**
 * Created by qoder on 16-11-2.
 */
import React from 'react';
import {Link} from 'react-router';


const StuListItem=()=>{
  return (
    <li>
      <Link className="J_menuItem" to="/home/students">
        <i className="fa fa-group"/>
        <span className="nav-label">学生列表</span></Link>
    </li>
  )
};

export default StuListItem;
