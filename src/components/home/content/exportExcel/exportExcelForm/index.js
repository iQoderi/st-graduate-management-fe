/**
 * Created by qoder on 16-6-26.
 */
import React from 'react';
import {Form, Col, FormGroup, FormControl, Button, Checkbox, ControlLabel} from 'react-bootstrap';
import 'whatwg-fetch';
// import API from '../../../../../api/requsetConfig';
// import {verifyPass, verifyEmail, verifyPhone} from '../../../../../library/verify';
// import MD5 from 'md5';
// import _$ from '../../../../../library/getElement';
const ExportSTForm = React.createClass({
  render: function () {
    return (
      <Form horizontal style={{width:'400px'}}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            学院
          </Col>
          <Col sm={10}>
            <select className="form-control">
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
        <FormGroup>
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
        <span className="text-danger" style={{marginLeft:'70px',fontSize:'12px'}}>
           *不需要的选项可以不用填写
        </span>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button
              type="button" bsStyle="primary" className="normal-btn fr">
              导出
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
});


export  default ExportSTForm;
