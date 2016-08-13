/**
 * Created by qoder on 16/6/23.
 */
import React from 'react';
import {Button, Modal, Form, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap';
import 'whatwg-fetch';
import API from '../../../api/requsetConfig';
import {verifyPass} from '../../../library/verify';
import MD5 from 'md5';
import {logoutWithNoTips} from '../../../library/logout';
import getToken from '../../../library/getToken';
import _$ from '../../../library/getElement';
const ChanAdminPass = React.createClass({
  timer:null,
  changePass: function () {
    var _this = this;
    const time=1500;
    if (!verifyPass(_$('newPass2').value)) {
      _this.isTips('新密码格式不正确', time);
      return false;
    }

    if (_$('newPass2').value !== _$('repeatPass2').value) {
      _this.isTips('两次密码输入不一致', time);
      return false;
    }
    _this.props.action.hideChangeAdminPass();
    _this.loading();
    const token = getToken();
    const options = {
      password: MD5(_$('newPass2').value)
    };
    fetch(`${API.changeAdminPass}?id=${this.props.data.id}`, {
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
        if (json.code === 10000) {
          _this.isTips('修改用户密码成功', time);
        }
        if (json.code === 10013) {
          _this.isTips(json.data.Msg, time);
        }

        if (json.code !== 10000 && json.code !== 10013) {
          _this.isTips(json.data.Msg, time);
          logoutWithNoTips();
        }
      })
  },
  isTips: function (tip, time) {
    clearTimeout(tiis.timer);
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
    const {action,data} =this.props;
    const formInstance = (
      <Form horizontal>
        <FormGroup controlId="newPass2">
          <Col componentClass={ControlLabel} sm={2}>
            新密码
          </Col>
          <Col sm={8}>
            <FormControl
              type="password" placeholder="密码(6-16位数字字母或者下划线)"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="repeatPass2">
          <Col componentClass={ControlLabel} sm={2}>
            重复密码
          </Col>
          <Col sm={8}>
            <FormControl
              type="password" placeholder="重复密码"/>
          </Col>
        </FormGroup>
      </Form>
    );
    return (
      <div className="modal-container">
        <Modal
          show={data.show}
          onHide={action.hideChangeAdminPass}
          container={this}
          aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">修改管理员密码</Modal.Title>
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

export default ChanAdminPass;
