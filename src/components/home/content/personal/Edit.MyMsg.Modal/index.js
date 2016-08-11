/**
 * Created by qoder on 16/7/20.
 */
import React, {Component} from 'react';
import {
  Button,
  Modal
} from 'react-bootstrap';
import AdminForm from './adminForm';
import StuForm from './studentForm';
import API from '../../../../../api/requsetConfig';
import 'whatwg-fetch';
import {verifyPass, verifyEmail, verifyPhone} from '../../../../../library/verify';
import _$ from '../../../../../library/getElement';
import getToken from '../../../../../library/getToken';
class EditMyMsg extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.timer = null;
  }

  closeModal() {
    const _this = this;
    const {editMyMess}=_this.props;
    editMyMess(false);
  }

  isTips(content, time) {
    clearTimeout(this.timer);
    const {showTips, hideTips}=this.props;
    showTips(content);
    this.timer = setTimeout(()=> {
      hideTips();
    }, time)
  }

  fetchData() {
    const {myMsg, showLoading, hideLoading, getMyMess}=this.props;
    if (myMsg.role === '管理员' || myMsg.role === '辅导员') {
      if (this.checkAdminData()) {
        var option = this.checkAdminData();
      } else {
        return false;
      }
    } else {
      if (this.checkStuData()) {
        var option = this.checkStuData();
      } else {
        return false;
      }
    }
    const time = 1500;
    this.closeModal();
    showLoading();
    const token = getToken();
    fetch(API.my, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Token': token
      },
      body: JSON.stringify(option)
    }).then((res)=> {
      return res.json();
    }).then((json)=> {
      hideLoading();
      if (!json.code) {
        json = {
          code: -1,
          data: {
            msg: '未知错误'
          }
        }
      }
      if (json.code === 10000) {
        option.email = myMsg.email;
        getMyMess(option);
        this.isTips('修改个人成功', time);

      } else {
        this.isTips(json.data.msg, time);
      }
    })
  }

  checkAdminData() {
    const _this = this;
    const time = 1000;
    const options = {
      name: _$('MAdminName').value,
      phone: _$('MAdminPhone').value,
      role: _$('MAdminRole').value,
      academy: _$('MAdminAcademy').value,
      code: _$('MAdminCode').value
    };
    if (!options.name) {
      _this.isTips('请填写用户名', time);
      return false;
    }
    if (!options.code) {
      _this.isTips('请填写工号', time);
      return false;
    }
    if (!verifyPhone(options.phone)) {
      _this.isTips('手机号格式不正确', time);
      return false;
    }

    return options;
  }

  checkStuData() {
    const _this = this;
    const time = 1000;
    const options = {
      name: _$('MStuName').value,
      phone: _$('MStuPhone').value,
      role: _$('MStuRole1').checked ? '在校生' : '毕业生',
      academy: _$('MStuAcademy').value,
      studentId: _$('MStuCode').value,
      major: _$('MStuMajor').value,
      class: _$('MStuClass').value,
      QQNumber: _$('MStuQQNum').value
    };
    
    if (!options.name) {
      _this.isTips('请填写用户名', time);
      return false;
    }
    if (!options.major) {
      _this.isTips('请填写工号', time);
      return false;
    }
    if (!verifyPhone(options.phone)) {
      _this.isTips('手机号格式不正确', time);
      return false;
    }
    return options;
  }

  confirmEdit() {
    const {myMsg}=this.props;
    this.fetchData();
  }

  render() {
    const {myMsg, show}=this.props;
    if (myMsg.role === '管理员' || myMsg.role === '辅导员') {
      var my = <AdminForm data={myMsg}/>
    } else {
      var my = <StuForm data={myMsg}/>
    }
    return (
      <Modal
        show={show}
        onHide={this.closeModal.bind(this)}
        container={this}
        aria-labelledby="contained-modal-title">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">修改个人信息</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {my}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={this.confirmEdit.bind(this)}
            type="button" bsStyle="primary"
            style={{width:"80px",borderRadius:'5px'}}>
            确认修改
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export  default EditMyMsg;
