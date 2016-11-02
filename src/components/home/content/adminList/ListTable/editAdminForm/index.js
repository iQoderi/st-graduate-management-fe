/**
 * Created by qoder on 16/6/23.
 */

/**
 * Created by qoder on 16-6-6.
 */

import React from 'react';
import {Form, Col, FormGroup, FormControl, Button, ControlLabel} from 'react-bootstrap';
import 'whatwg-fetch';
import API from '../../../../../../api/requsetConfig';
import {verifyPass, verifyEmail, verifyPhone} from '../../../../../../library/verify';
import MD5 from 'md5';
import _$ from '../../../../../../library/getElement';
require('./index.css');

const EditAdminForm = React.createClass({
  addAdmin: function () {
    const _this = this;
    const time = 1000;
    if (!_$('adminName').value) {
      _this.isTips('请填写用户名', time);
      return false;
    }
    if (!_$('adminCode').value) {
      _this.isTips('请填写工号', time);
      return false;
    }
    if (!verifyPhone(_$('adminPhone').value)) {
      _this.isTips('手机号格式不正确', time);
      return false;
    }
    if (!verifyEmail(_$('adminEmail').value)) {
      _this.isTips('邮箱号格式不正确', time);
      return false;
    }
    if (!verifyPass(_$('adminPassword').value)) {
      _this.isTips('密码格式不正确', time);
      return false;
    }

    const options = {
      name: _$('adminName').value,
      email: _$('adminEmail').value,
      phone: _$('adminPhone').value,
      role: _$('adminRole').value,
      academy: _$('adminAcademy').value,
      code: _$('adminCode').value,
      password: MD5(_$('adminPassword').value)
    };
    const token = localStorage.getItem('neuqst.token');
    _this.loading();
    fetch(API.admin, {
      method: 'POST',
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
        _this.loaded();
        if (json.code === 10000) {
          _this.isTips('添加管理员成功', 1500);
        } else {
          _this.isTips(json.data.msg, 1500);
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
  render: function () {
    const {name, academy, role, code, phone}=this.props.data;
    return (
      <Form horizontal id="editAdmin-form">
        <FormGroup controlId="adminName2">
          <Col componentClass={ControlLabel} sm={2}>
            姓名
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={name}
              type="text" placeholder="请输入姓名"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="academy2">
          <Col componentClass={ControlLabel} sm={2}>
            学院
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass="select" defaultValue={academy}>
              <option value="研究生分院">研究生分院</option>
              <option value="经济学院">经济学院</option>
              <option value="管理学院">管理学院</option>
              <option value="计算机与通信工程学院">计算机与通信工程学院</option>
              <option value="控制工程学院">控制工程学院</option>
              <option value="语言学院">语言学院</option>
              <option value="数学与统计学院">数学与统计学院</option>
              <option value="资源与材料学院">资源与材料学院</option>
              <option value="社会科学研究院">社会科学研究院</option>
              <option value="体育部">体育部</option>
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup controlId="role2">
          <Col componentClass={ControlLabel} sm={2}>
            权限
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass="select" defaultValue={role}>
              <option value="管理员">管理员</option>
              <option value="辅导员">辅导员</option>
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup controlId="adminCode2">
          <Col componentClass={ControlLabel} sm={2}>
            工号
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={code}
              type="text" placeholder="请输入工号"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="adminPhone2">
          <Col componentClass={ControlLabel} sm={2}>
            手机
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={phone}
              type="text" placeholder="请输入联系电话"/>
          </Col>
        </FormGroup>
      </Form>
    )
  }
});


export  default EditAdminForm;
