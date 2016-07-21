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
import 'whatwg-fetch';
import API from '../../../api/requsetConfig';
import goto from '../../../library/changeHash';
import {logout} from '../../../library/logout';
const Avator = require('../../../images/avatar.png');


const SideBar = React.createClass({
  getInitialState: function () {
    return {
      role: "",
      email: "",
      sideItems: []
    }
  },
  componentDidMount: function () {
    const _this = this;
    const token = localStorage.getItem('neuqst.token');
    const {getMyMess}=this.props.action;
    _this.loading();
    fetch(API.my, {
      headers: {
        Token: token
      }
    })
      .then((res)=> {
        return res.json();
      })
      .then((json)=> {
        _this.loaded();
        if (json.code === 10000) {
          if (json.data.users.isCompleteMsg) {
            if (json.data.users.role === '学生') {
              getMyMess(json.data.users.students);
              _this.setState({
                role: json.data.users.role,
                email: json.data.users.email,
                sideItems: [<PersonalItem/>, <SearchItem/>]
              });
            } else {
              getMyMess(json.data.users.teacher);
              _this.setState({
                role: json.data.users.role,
                email: json.data.users.email,
                sideItems: [<PersonalItem/>, < AddAdminItem/>, <AdminListItem/>, < SearchItem/>, <ImportExcelItem/>,
                  < ExportExcelItem/>]
              });
            }
          } else {
            _this.isTips('您还没有完善信息，请先完善信息');
            goto('/user/CompleteMsg', 1000)
          }
        } else {
          _this.isTips(json.data.Msg, 1500);
          logout();
        }
      })
  },
  isTips: function (tip, time) {
    clearTimeout(timer);
    const {showTips, hideTips}=this.props.action;
    showTips(tip);
    var timer = setTimeout(this.props.action.hideTips, time);
  },
  loading: function () {
    const {showLoading}=this.props.action;
    showLoading();
  },
  loaded: function () {
    const {hideLoading}=this.props.action;
    hideLoading();
  },
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
                  <span className="block m-t-xs"><strong className="font-bold">{this.state.email}</strong></span>
                  <span className="text-muted text-xs block" style={{cursor:'pointer'}}>
                    <span onClick={this.showDropMenu}>{this.state.role}
                      <b className="caret"/>
                    </span>
                    <span onMouseLeave={this.hideDropMenu}>
                      <DropMenu Show={is_dropMenu} showChanPass={action.showChanPass} role={this.state.role}/>
                    </span>
                  </span>
                </span>
              </span>
            </div>
          </li>
          {this.state.sideItems}
        </ul>
      </nav>
    )
  }
});

export  default SideBar;
