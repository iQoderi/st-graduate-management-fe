/**
 * Created by qoder on 16-6-23.
 */
import React from 'react';
import {Modal, Button,} from 'react-bootstrap';
import API from '../../../api/requsetConfig';
import getToken from '../../../library/getToken';
import 'whatwg-fetch';

require('./index.css');

const Confirm = React.createClass({
  timer:null,
  cancelConfirm: function () {
    const {hideConfirm}=this.props.action;
    hideConfirm();
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
          this.isTips(json.data.Msg, 1000);
        }
      })
  },
  sureConfirm: function () {
    const token = getToken();
    const {curPage, page}=this.props.pages;
    const per = 15;
    this.cancelConfirm();
    this.loading();
    fetch(`${API.admin}?id=${this.props.data.id}`, {
      method: 'DELETE',
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
          this.isTips('删除用户成功', 1500);
          page.length > 1 && this.readPage(curPage, per);
          page.length <= 1 && this.readPage(curPage - 1, per);
        } else {
          this.isTips(json.data.Msg, 1500)
        }
      })
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
    const {header, body}=this.props.data;
    return (
      <div className="static-modal" style={{display:this.props.show}}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>{header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {body}
          </Modal.Body>

          <Modal.Footer>
            <Button id="cancel-btn" onClick={this.cancelConfirm}>取消</Button>
            <Button bsStyle="primary" onClick={this.sureConfirm} style={{width:'80px'}}>确认</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    )
  }
});

export default Confirm;
