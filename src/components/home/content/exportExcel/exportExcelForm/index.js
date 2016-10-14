/**
 * Created by qoder on 16-6-26.
 */
import React, {Component} from 'react';
import {Form, Col, FormGroup, FormControl, Button, Checkbox, ControlLabel} from 'react-bootstrap';
import _$ from '../../../../../library/getElement';
import './index.css';

class ExportSTForm extends Component {
  constructor(props) {
    super(props);
    this.exportStu = this.exportStu.bind(this);
    this.verifyInfo = this.verifyInfo.bind(this);
  }

  verifyInfo() {
    const body = {};
    if (_$('eAcademy').value) {
      body.academy = _$('eAcademy').value;
    }
    if (_$('eMajor').value) {
      body.major = _$('eMajor').value;
    }
    if (_$('eClass').value) {
      body.class = _$('eClass').value;
    }

    return body;
  }

  exportStu() {
    const body = this.verifyInfo();
    this.props.action.exportStu(body);
  }

  render() {
    return (
      <Form horizontal id="export-form">
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            学院
          </Col>
          <Col sm={10}>
            <select className="form-control" id="eAcademy">
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
        <FormGroup controlId="eMajor">
          <Col componentClass={ControlLabel} sm={2}>
            专业
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入专业名称"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="eClass">
          <Col componentClass={ControlLabel} sm={2}>
            班级
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入班级名称"/>
          </Col>
        </FormGroup>
        <span className="text-danger" id="export-must-input" style={{fontSize: '12px'}}>
           *不需要的选项可以不用填写
        </span>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button
              onClick={this.exportStu}
              type="button" bsStyle="primary"
              className="normal-btn fr">
              导出
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}


export  default ExportSTForm;
