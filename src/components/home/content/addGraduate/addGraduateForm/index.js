/**
 * Created by qoder on 16/8/11.
 */
import React, {Component} from 'react';
import {Form, Col, FormGroup, FormControl, Button, Checkbox, ControlLabel} from 'react-bootstrap';
import MustInput from '../../../../tools/mustInput';
import 'whatwg-fetch';
import API from '../../../../../api/requsetConfig';
import {verifyQQ, verifyPhone} from '../../../../../library/verify';
import MD5 from 'md5';
import _$ from '../../../../../library/getElement';
import './index.css';

class AddGraduateForm extends Component {
  constructor(props) {
    super(props);
    this.submitInfo = this.submitInfo.bind(this);
    this.verifyInformation = this.verifyInformation.bind(this);
  }

  verifyInformation() {
    const resource = {
      name: _$('gName').value,
      academy: _$('gAcademy').value,
      major: _$('gMajor').value,
      stuId: _$('gStuId').value,
      company: _$('gCompany').value,
      job: _$('gJob').value,
      skill: _$('gSkill').value
    };
    if (!resource.name) {
      return false;
    }

    if (!resource.academy) {
      return false;
    }

    if (!resource.major) {
      return false;
    }
    if (!resource.stuId) {
      return false;
    }
    if (_$('gPhone').value) {
      if (!verifyPhone(_$('gPhone').value)) {
        return false;
      } else {
        resource.phone = _$('gPhone').value;
      }
    }

    if (_$('gQQ').value) {
      if (!verifyQQ(_$('gQQ').value)) {
        return false;
      } else {
        resource.phone = _$('gQQ').value;
      }
    }

    if (!resource.company) {
      return false;
    }

    if (!resource.job) {
      return false;
    }

    if (!resource.skill) {
      return false;
    }
    if (_$('gSuggestion').value) {
      resource.suggestion = _$('gSuggestion').value;
    }

    if (_$('gRecruit').value) {
      resource.recruit = _$('gRecruit').value;
    }
    console.log(resource);
    return resource;
  }

  submitInfo() {
    const data = this.verifyInformation();
    if (data) {

    } else {

    }
  }

  render() {
    return (
      <Form horizontal style={{width: '400px'}}>
        <FormGroup controlId="gName">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>姓名
          </Col>
          <Col sm={10}>
            <FormControl
              type="text" placeholder="请输入毕业生姓名"/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>学院
          </Col>
          <Col sm={10}>
            <select className="form-control" id="gAcademy">
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
        <FormGroup controlId="gMajor">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>专业
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入毕业生输入专业"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="gStuId">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>学号
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入毕业生学号"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="gPhone">
          <Col componentClass={ControlLabel} sm={2}>
            手机
          </Col>
          <Col sm={10}>
            <FormControl type="tel" placeholder="请输入毕业生手机号"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="gQQ">
          <Col componentClass={ControlLabel} sm={2}>
            QQ
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入毕业生QQ"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="gCompany">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>公司
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入毕业生就业公司"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="gJob">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>岗位
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入毕业生就业岗位"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="gSkill">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>职能
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入毕业生职能"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="gSuggestion">
          <Col componentClass={ControlLabel} sm={2}>
            建议
          </Col>
          <Col sm={10}>
            <FormControl componentClass="textarea" placeholder="请输入毕业生的就业建议"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="gRecruit">
          <Col componentClass={ControlLabel} sm={2}>
            招聘
          </Col>
          <Col sm={10}>
            <FormControl componentClass="textarea" placeholder="请输入毕业生就业公司的招聘信息"/>
          </Col>
        </FormGroup>
        <span className="text-danger" style={{marginLeft: '70px', fontSize: '12px'}}>
           *号为必填项
        </span>
        <FormGroup>
          <Col smOffset={2} sm={10}>
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

export default AddGraduateForm;
