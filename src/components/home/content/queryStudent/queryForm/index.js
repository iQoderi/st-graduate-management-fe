/**
 * Created by qoder on 16-6-26.
 */
import React from 'react';
import {Form, Col, FormGroup, FormControl, Button, ControlLabel} from 'react-bootstrap';
import 'whatwg-fetch';
import _$ from '../../../../../library/getElement';
import './index.css';

const QuerySTForm = React.createClass({
  timer: null,
  searchStu: function () {
    const body = {
      academy: _$('sAcademy').value,
      major: _$('sMajor').value,
      stuId: _$('sStuId').value
    };
    this.props.action.searchStu(1, 15, body);
  },
  isTips: function (tip, time = 1500) {
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
    return (
      <Form horizontal id="search-student-form">
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            学院
          </Col>
          <Col sm={10}>
            <select className="form-control"
                    id="sAcademy">
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
        <FormGroup controlId="sMajor">
          <Col componentClass={ControlLabel} sm={2}>
            专业
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入专业名称"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="sStuId">
          <Col componentClass={ControlLabel} sm={2}>
            学号
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入学号"/>
          </Col>
        </FormGroup>
        <span className="text-danger" style={{marginLeft: '70px', fontSize: '12px'}}>
           *不需要的选项可以不用填写
        </span>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button
              onClick={this.searchStu}
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
