/**
 * Created by qoder on 16/8/11.
 */
import React, {Component} from 'react';
import {Link} from  'react-router';

class AddGraduateItem extends Component {
  render() {
    return (
      <li>
        <Link className="J_menuItem" to="/home/addGraduate" activeClassName="navActive">
          <i className="fa fa-plus"/>
          <span className="nav-label">添加毕业生</span></Link>
      </li>
    )
  }
}

export  default  AddGraduateItem;
