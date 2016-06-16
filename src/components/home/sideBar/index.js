/**
 *
 * Created by qoder on 16-6-4.
 */
require('./index.css');
import React from 'react';
import ExportExcelItem from '../sideBarItem/exportExcel';
import ImportExcelItem from '../sideBarItem/importExcel';
import SearchItem from '../sideBarItem/queryStu';
import PersonalItem from '../sideBarItem/personal';
import AddAdminItem from '../sideBarItem/addAdmin';
import DropMenu from '../dropmenu';
import AdminListItem from '../sideBarItem/adminList';
const Avator = require('../../../images/avatar.png');
const SideBar = React.createClass({
  showDropMenu: function () {
    const {showDropMenu}=this.props.action;
    showDropMenu();
  },
  hideDropMenu: function () {
    const {hideDropMenu}=this.props.action;
    hideDropMenu();
  },
  render: function () {
    const {action, is_dropMenu}=this.props;
    return (
      <nav className="navbar-default navbar-static-side" role="navigation">
        <ul className="nav nav-side" id="side-menu">
          <li className="nav-header">
            <div className="dropdown profile-element">
              <span><img alt="image" className="img-circle" src={Avator}/></span>
              <span className="dropdown-toggle">
                <span className="clear">
                  <span className="block m-t-xs"><strong className="font-bold">齐超</strong></span>
                  <span className="text-muted text-xs block" style={{cursor:'pointer'}}>
                    <span onClick={this.showDropMenu}>超级管理员
                      <b className="caret"/>
                    </span>
                    <span onMouseLeave={this.hideDropMenu}>
                      <DropMenu Show={is_dropMenu} showChanPass={action.showChanPass}/>
                    </span>
                  </span>
                </span>
              </span>
            </div>
          </li>
          <PersonalItem/>
          <AddAdminItem/>
          <AdminListItem/>
          <SearchItem/>
          <ImportExcelItem/>
          <ExportExcelItem/>
        </ul>
      </nav>
    )
  }
});

export  default SideBar;
