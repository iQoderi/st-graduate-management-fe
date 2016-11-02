/**
 * Created by qoder on 16-6-6.
 */
import React,{Component} from 'react';
import {Form, Col, FormGroup, FormControl, Button, Checkbox, ControlLabel} from 'react-bootstrap';
import MustInput from '../../../../tools/mustInput';
import 'whatwg-fetch';
import API from '../../../../../api/requsetConfig';
import {verifyPass, verifyEmail, verifyPhone} from '../../../../../library/verify';
import MD5 from 'md5';
import _$ from '../../../../../library/getElement';
import './index.css';

class AddAdminForm extends Component{
    constructor(props) {
      super(props);
      this.addAdmin=this.addAdmin.bind(this);
      this.loaded=this.loaded.bind(this);
      this.loading=this.loading.bind(this);
      this.isTips=this.isTips.bind(this);
    }
  addAdmin() {
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
  }
  isTips(tip, time){
    clearTimeout(timer);
    const {showTips, hideTips}=this.props.action;
    showTips(tip);
    var timer = setTimeout(this.props.action.hideTips, time);
  }
  loading(){
    const {showLoading}=this.props.action;
    showLoading();
  }
  loaded(){
    const {hideLoading}=this.props.action;
    hideLoading();
  }
  render() {
    return (
      <Form horizontal id="addAdminForm">
        <FormGroup controlId="adminName">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>姓名
          </Col>
          <Col sm={10}>
            <FormControl
              type="text" placeholder="请输入姓名"/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>学院
          </Col>
          <Col sm={10}>
            <select className="form-control" id="adminAcademy">
              <option>研究生分院</option>
              <option>经济学院</option>
              <option>管理学院</option>
              <option>计算机与通信工程学院</option>
              <option>控制工程学院</option>
              <option>语言学院</option>
              <option>数学与统计学院</option>
              <option>资源与材料学院</option>
              <option>社会科学研究院</option>
              <option>体育部</option>
            </select>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>权限
          </Col>
          <Col sm={10}>
            <select className="form-control" id="adminRole">
              <option>管理员</option>
              <option>辅导员</option>
            </select>
          </Col>
        </FormGroup>
        <FormGroup controlId="adminCode">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>工号
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入工号"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="adminPhone">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>手机
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入联系电话"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="adminEmail">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>邮箱
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="请输入邮箱地址"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="adminPassword">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>密码
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="请输入密码"/>
          </Col>
        </FormGroup>
        <span className="text-danger" id="addAdmin-must-input">
           *号为必填项
        </span>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button
              onClick={this.addAdmin}
              type="button" bsStyle="primary" className="normal-btn fr">
              注册
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}


export  default AddAdminForm;
