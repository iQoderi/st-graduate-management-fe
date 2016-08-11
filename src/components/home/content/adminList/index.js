/**
 * Created by qoder on 16/6/6.
 */
import React from  'react';
import ListTable from './ListTable'
import {Pagination} from 'react-bootstrap';
import getToken from '../../../../library/getToken';
import API from '../../../../api/requsetConfig';
import EditAdmin from '../../../tools/editAdminModal';
import ChangeAdminPass from '../../../tools/changeAdminPass';
import 'whatwg-fetch';
require('./index.css');


const AdminList = React.createClass({
  timer: null,
  handleSelect(eventKey) {
    const per = 15;
    this.readPage(eventKey, per);
  },
  readPage: function (start, per) {
    const {changePageSucc}=this.props.action;
    const token = getToken();
    this.loading();
    fetch(`${API.admin}?start=${start}&pageSize=${per}`, {
      headers: {
        Token: token
      }
    })
      .then((res)=> {
        return res.json();
      })
      .then((json)=> {
        this.loaded();
        if (json.code === 10000) {
          changePageSucc(json.data.pages, start, json.data.count)
        } else {
          this.isTips(json.data.Msg, 10000);
        }
      })
  },
  componentDidMount: function () {
    const start = 1;
    const per = 15;
    this.readPage(start, per);
  },

  isTips: function (tip, time) {
    clearTimeout(this.timer);
    const {showTips, hideTips}=this.props.action;
    showTips(tip);
    this.timer = setTimeout(hideTips, time);
  },
  loading: function () {
    const {showLoading}=this.props.action;
    showLoading();
  },
  loaded: function () {
    const {hideLoading}=this.props.action;
    hideLoading();
  },
  render: function () {
    const {count, curPage, page}=this.props.pages;
    return (
      <div className="adminList-wrapper">
        <ChangeAdminPass
          action={this.props.action}
          data={this.props.changeAdminPass}
        />
        <EditAdmin
          data={this.props.editAdmin}
          action={this.props.action}
          pages={this.props.pages}/>
        <ListTable page={page} action={this.props.action}/>
        <div className="pager">
          <Pagination
            prev
            next
            first
            last
            boundaryLinks
            items={Math.ceil(count / 15)}
            maxButtons={5}
            activePage={curPage}
            onSelect={this.handleSelect}/>
        </div>
      </div>
    )
  }
});


export  default AdminList;
