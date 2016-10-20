/**
 * Created by qoder on 16/9/25.
 */
import React, {Component} from 'react';
import {Form, Col, FormGroup, FormControl, Button, ControlLabel} from 'react-bootstrap';
import MustInput from '../../../tools/mustInput';
import 'whatwg-fetch';
import _$ from '../../../../library/getElement';
import './index.css';

class MoreInfoForm extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.submitInfo = this.submitInfo.bind(this);
    this.verifyInformation = this.verifyInformation.bind(this);
  }


  verifyInformation() {
    const {ayncCloseTips}=this.props.action;
    const resource = {
      role: _$('myRole').value,
      company: _$('myCompany').value,
      job: _$('myJob').value,
      skill: _$('mySkill').value,
    };
    if (!resource.company) {
      ayncCloseTips('请填写毕业生就职公司');
      return false;
    }

    if (!resource.job) {
      ayncCloseTips('请填写毕业生就职岗位');
      return false;
    }

    if (!resource.skill) {
      ayncCloseTips('请填写毕业生职能');
      return false;
    }

    if (_$('mySuggestion').value) {
      resource.suggestion = _$('mySuggestion').value;
    }

    if (_$('myRecruit').value) {
      resource.recruit = _$('myRecruit').value;
    }
    return resource;
  }

  submitInfo() {
    const data = this.verifyInformation();
    const {graduate, action}=this.props;
    if (data) {
      if (graduate) {
        action.updateGraduate(data);
      } else {
        action.addGraduateMsg(data);
      }
    }
  }

  render() {
    let graduate = this.props.graduate || {};
    return (
      <Form horizontal id="moreInfo-form">
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>毕业方向
          </Col>
          <Col sm={10}>
            <select
              defaultValue={graduate.role}
              className="form-control" id="myRole">
              <option>工作</option>
              <option>出国</option>
              <option>读研</option>
            </select>
          </Col>
        </FormGroup>
        <FormGroup controlId="myCompany">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>公司(学校)
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={graduate.company}
              type="text" placeholder="请输入毕业生就业公司或读研,出国学校"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="myJob">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>岗位(专业)
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={graduate.job}
              type="text" placeholder="请输入毕业生就业岗位或者就读专业"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="mySkill">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>职能(方向)
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={graduate.skill}
              type="text" placeholder="请输入毕业生职能或者就读方向"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="mySuggestion">
          <Col componentClass={ControlLabel} sm={2}>
            建议
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={graduate.suggestion}
              componentClass="textarea" placeholder="请输入毕业生的就业建议"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="myRecruit">
          <Col componentClass={ControlLabel} sm={2}>
            招聘
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={graduate.recruit}
              componentClass="textarea" placeholder="请输入毕业生就业公司的招聘信息或者读研出国学校的最新招生信息"/>
          </Col>
        </FormGroup>
        <span
          id="moreInfo-tips"
          className="text-danger" style={{fontSize: '12px'}}>
           *号为必填项
        </span>
        <FormGroup>
          <Col smOffset={0} sm={10}>
            <Button
              onClick={this.submitInfo}
              type="button" bsStyle="primary" className="normal-btn fr">
              确认
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default MoreInfoForm;
