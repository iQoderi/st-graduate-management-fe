/**
 * Created by qoder on 16/8/11.
 */
import React, {Component} from 'react';
import {Form, Col, FormGroup, FormControl, Button, ControlLabel} from 'react-bootstrap';
import MustInput from '../../../../tools/mustInput';
import 'whatwg-fetch';
import API from '../../../../../api/requsetConfig';
import {verifyQQ, verifyPhone} from '../../../../../library/verify';
import getToken from '../../../../../library/getToken';
import _$ from '../../../../../library/getElement';
import './index.css';

class AddGraduateForm extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.submitInfo = this.submitInfo.bind(this);
    this.verifyInformation = this.verifyInformation.bind(this);
    this.isTips = this.isTips.bind(this);
    this.loading = this.loading.bind(this);
    this.loaded = this.loaded.bind(this);
  }

  isTips(tip, time = 1500) {
    clearTimeout(this.timer);
    const {showTips, hideTips}=this.props.action;
    showTips(tip);
    this.timer = setTimeout(hideTips, time);
  }

  loading() {
    const {showLoading}=this.props.action;
    showLoading();
  }

  loaded() {
    const {hideLoading}=this.props.action;
    hideLoading();
  }

  verifyInformation() {
    const resource = {
      name: _$('gName').value,
      academy: _$('gAcademy').value,
      role: _$('gRole').value,
      major: _$('gMajor').value,
      class: _$('gClass').value,
      stuId: _$('gStuId').value,
      company: _$('gCompany').value,
      job: _$('gJob').value,
      skill: _$('gSkill').value,
      phone: _$('gPhone').value
    };
    console.log(resource);
    if (!resource.name) {
      this.isTips('请填写毕业生姓名');
      return false;
    }

    if (!resource.academy) {
      this.isTips('请填写毕业生所在学院');
      return false;
    }

    if (!resource.major) {
      this.isTips('请填写毕业生所在专业');
      return false;
    }
    if (!resource.class) {
      this.isTips('请填写毕业生所在班级');
      return false;
    }
    if (!resource.stuId) {
      this.isTips('请填写毕业生学号');
      return false;
    }

    if (!resource.phone) {
      this.isTips('请填写毕业生手机号');
      return false;
    }

    if (!verifyPhone(_$('gPhone').value)) {
      this.isTips('手机号格式不合法');
      return false;
    }

    if (_$('gQQ').value) {
      if (!verifyQQ(_$('gQQ').value)) {
        return false;
      } else {
        resource.qq = _$('gQQ').value;
      }
    }

    if (!resource.company) {
      this.isTips('请填写毕业生就职公司');
      return false;
    }

    if (!resource.job) {
      this.isTips('请填写毕业生就职岗位');
      return false;
    }

    if (!resource.skill) {
      this.isTips('请填写毕业生职能');
      return false;
    }

    if (_$('gSuggestion').value) {
      resource.suggestion = _$('gSuggestion').value;
    }

    if (_$('gRecruit').value) {
      resource.recruit = _$('gRecruit').value;
    }
    return resource;
  }

  submitInfo() {
    const data = this.verifyInformation();
    if (data) {
      const token = getToken();
      this.loading();
      fetch(API.adminAddGraduate, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "token": token
        },
        body: JSON.stringify(data)
      }).then((res)=> {
        this.loaded();
        return res.json();
      }).then((json)=> {
        if (json.code === 10000) {
          this.isTips('添加毕业生成功');
        } else {
          this.isTips(json.data.msg);
        }
      })
    }
  }


  render() {
    return (
      <Form horizontal id="addGraduate-form">
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
            <MustInput/>毕业方向
          </Col>
          <Col sm={10}>
            <select className="form-control" id="gRole">
              <option>工作</option>
              <option>出国</option>
              <option>读研</option>
            </select>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>学院
          </Col>
          <Col sm={10}>
            <select className="form-control" id="gAcademy">
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
        <FormGroup controlId="gMajor">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>本科专业
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入毕业生专业"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="gClass">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>班级
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入毕业生班级"/>
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
            <MustInput/>手机
          </Col>
          <Col sm={10}>
            <FormControl type="tel" placeholder="请输入毕业生手机号"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="gQQ">
          <Col componentClass={ControlLabel} sm={2}>
            QQ或微信
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入毕业生QQ或者微信"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="gCompany">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>公司(学校)
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入毕业生就业公司或者考研出国学校"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="gJob">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>岗位(专业)
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入毕业生就业岗位或者读研出国专业"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="gSkill">
          <Col componentClass={ControlLabel} sm={2}>
            <MustInput/>职能(方向)
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
            <FormControl componentClass="textarea"
                         placeholder="请输入毕业生建议"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="gRecruit">
          <Col componentClass={ControlLabel} sm={2}>
            招聘
          </Col>
          <Col sm={10}>
            <FormControl componentClass="textarea"
                         placeholder="请输入毕业生就业公司的招聘信息或者读研出国学校最新招生信息"/>
          </Col>
        </FormGroup>
        <span className="text-danger" id="addGraduate-must-input">
           *号为必填项
        </span>
        <FormGroup>
          <Col sm={10}>
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
