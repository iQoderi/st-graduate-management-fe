/**
 * Created by qoder on 16-6-26.
 */
import React from 'react';
import {Form, Col, FormGroup, FormControl, Button, Checkbox, ControlLabel} from 'react-bootstrap';
import 'whatwg-fetch';
import API from '../../../../../api/requsetConfig';
import {verifyPass, verifyEmail, verifyPhone} from '../../../../../library/verify';
import MD5 from 'md5';
import _$ from '../../../../../library/getElement';
const QuerySTForm = React.createClass({
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
          _this.isTips(json.data.Msg, 1500);
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
    return (
      <Form horizontal style={{width:'400px'}}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            学院
          </Col>
          <Col sm={10}>
            <select className="form-control" id="adminAcademy">
              <option>全部</option>
              <option>经济学院</option>
              <option>管理学院</option>
              <option>计算机与通信工程学院</option>
              <option>控制工程学院</option>
              <option>语言学院</option>
              <option>数学与统计学院</option>
              <option>资源与材料学院</option>
            </select>
          </Col>
        </FormGroup>
        <FormGroup controlId="adminCode">
          <Col componentClass={ControlLabel} sm={2}>
            专业
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入专业名称"/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            身份
          </Col>
          <Col sm={10}>
            <select className="form-control">
              <option>全部</option>
              <option>留学生</option>
              <option>毕业生</option>
            </select>
          </Col>
        </FormGroup>
        <FormGroup controlId="adminCode">
          <Col componentClass={ControlLabel} sm={2}>
            学号
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入学号"/>
          </Col>
        </FormGroup>
        <span className="text-danger" style={{marginLeft:'70px',fontSize:'12px'}}>
           *不需要的选项可以不用填写
        </span>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button
              onClick={this.addAdmin}
              type="button" bsStyle="primary" className="normal-btn fr">
              搜索
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
});


export  default QuerySTForm;
