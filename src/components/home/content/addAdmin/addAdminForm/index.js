/**
 * Created by qoder on 16-6-6.
 */
import React from 'react';
import {Form, Col, FormGroup, FormControl, Button, Checkbox, ControlLabel} from 'react-bootstrap';

require('./index.css');
const AddAdminForm = React.createClass({
  render: function () {
    return (
      <Form horizontal style={{width:'400px'}}>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            姓名
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入姓名"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            学院
          </Col>
          <Col sm={10}>
            <select className="form-control">
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
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            权限
          </Col>
          <Col sm={10}>
            <select className="form-control">
              <option>管理员</option>
              <option>辅导员</option>
            </select>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            工号
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入工号"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            手机
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入联系电话"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            邮箱
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="请输入邮箱地址"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            手机
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入联系电话"/>
          </Col>
        </FormGroup>


        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            密码
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="请输入密码"/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="button" bsStyle="primary" className="normal-btn fr">
              注册
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
});


export  default AddAdminForm;
