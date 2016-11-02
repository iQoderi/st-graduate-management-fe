/**
 * Created by qoder on 16/6/23.
 */
import React from 'react';
import {
  Modal,
  Button,
} from 'react-bootstrap';
import EditAdminForm from '../../../components/home/content/adminList/ListTable/editAdminForm';
import _$ from '../../../library/getElement';
import {verifyPhone} from '../../../library/verify';
import 'whatwg-fetch';
import API from '../../../api/requsetConfig';
import getToken from '../../../library/getToken';

const EditAdmin = React.createClass({
  timer:null,
  close(){
    this.props.action.hideEditAdmin();
  },
  handEditAdmin(){
    const _this = this;
    const time = 1000;
    if (!_$('adminName2').value) {
      _this.isTips('请填写用户名', time);
      return false;
    }
    if (!_$('adminCode2').value) {
      _this.isTips('请填写工号', time);
      return false;
    }
    if (!verifyPhone(_$('adminPhone2').value)) {
      _this.isTips('手机号格式不正确', time);
      return false;
    }

    const options = {
      name: _$('adminName2').value,
      code: _$('adminCode2').value,
      academy: _$('academy2').value,
      phone: _$('adminPhone2').value,
      role: _$('role2').value,
      email: this.props.data.data.email
    };

    const token = getToken();
    this.loading();
    this.close();
    fetch(`${API.admin}?id=${this.props.data.data.id}`, {
      method: 'PUT',
      headers: {
        'Token': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options)
    })

      .then((res)=> {
        return res.json();
      })
      .then((json)=> {
        this.loaded();
        if (json.code === 10000) {
          this.isTips('修改管理员信息成功', time);
          const {curPage}=this.props.pages;
          const per = 15;
          this.readPage(curPage,per);
        } else {
          this.isTips(json.data.msg, time);
        }
      })
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
          this.isTips(json.data.msg, 10000);
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
  render() {
    const {show} =this.props.data;
    return (
      <div>
        <Modal show={show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>编辑管理员信息</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditAdminForm data={this.props.data.data}/>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="edit-button"
              bsStyle='primary'
              onClick={this.handEditAdmin}>确认编辑</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});


export default EditAdmin;
