/**
 *
 * Created by qoder on 16-6-14.
 */
import React from 'react';
import {Button, Modal, Form, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap';
import 'whatwg-fetch';
import API from '../../../api/requsetConfig';
import {verifyPass} from '../../../library/verify';
import MD5 from 'md5';
import {logoutWithNoTips} from '../../../library/logout';
require('./index.css');
const ChanPassModal = React.createClass({
  timer:null,
  _$: function (node) {
    return document.querySelector(node);
  },
  changePass: function () {
    var _this = this;
    if (!verifyPass(_this._$('#oldPass').value)) {
      _this.isTips('旧密码不合法', 1500);
      return false;
    }

    if (!verifyPass(_this._$('#newPass').value)) {
      _this.isTips('新密码不合法', 1500);
      return false;
    }

    if (_this._$('#newPass').value !== _this._$('#repeatPass').value) {
      _this.isTips('两次密码输入不一致', 1500);
      return false;
    }
    _this.loading();
    const token = localStorage.getItem('neuqst.token');
    const options = {
      oldPassword: MD5(_this._$('#oldPass').value),
      password: MD5(_this._$('#newPass').value)
    };
    fetch(API.changePass, {
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
        _this.loaded();
        _this.props.action.hideChanPass();
        if (json.code === 10000) {
          _this.isTips('修改密码成功', 1500);
        }
        if (json.code === 10013) {
          _this.isTips(json.data.Msg, 1500);
        }

        if (json.code !== 10000 && json.code !== 10013) {
          _this.isTips(json.data.Msg, 1500);
          logoutWithNoTips();
        }
      })
  },
  isTips: function (tip, time) {
    clearTimeout(this.timer);
    const {showTips, hideTips}=this.props.action;
    showTips(tip);
    this.timer= setTimeout(hideTips, time);
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
  render() {
    var {is_chanPass, action} =this.props;
    const formInstance = (

      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail1">
          <Col componentClass={ControlLabel} sm={2}>
            旧密码
          </Col>
          <Col sm={8}>
            <FormControl
              id="oldPass"
              type="password" placeholder="密码(6-16位数字字母或者下划线)"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            新密码
          </Col>
          <Col sm={8}>
            <FormControl
              id="newPass"
              type="password" placeholder="密码(6-16位数字字母或者下划线)"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            重复密码
          </Col>
          <Col sm={8}>
            <FormControl
              id="repeatPass"
              type="password" placeholder="重复密码"/>
          </Col>
        </FormGroup>
      </Form>
    );
    return (
      <div className="modal-container">
        <Modal
          show={is_chanPass}
          onHide={action.hideChanPass}
          container={this}
          aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">修改密码</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {formInstance}
          </Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="primary"
              style={{width:"80px",borderRadius:'5px'}}
              onClick={this.changePass}>确认</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default ChanPassModal;
