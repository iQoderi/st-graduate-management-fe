/**
 * Created by qoder on 16/7/20.
 */
/**
 * Created by qoder on 16/7/20.
 */
import React, {Component} from 'react';
import {
  Radio,
  Form,
  Col,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

class StuForm extends Component {
  render() {
    return (
      <Form horizontal style={{width:'400px'}}>
        <FormGroup controlId="adminName">
          <Col componentClass={ControlLabel} sm={2}>
            姓名
          </Col>
          <Col sm={10}>
            <FormControl
              type="text" placeholder="请输入姓名"/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            学院
          </Col>
          <Col sm={10}>
            <select className="form-control" id="adminAcademy">
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
        <FormGroup controlId="adminCode">
          <Col componentClass={ControlLabel} sm={2}>
            专业
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入专业"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="adminCode">
          <Col componentClass={ControlLabel} sm={2}>
            班级
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入班级"/>
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
        <FormGroup controlId="adminPhone">
          <Col componentClass={ControlLabel} sm={2}>
            手机
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入联系电话"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="adminPhone">
          <Col componentClass={ControlLabel} sm={2}>
            QQ号
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入QQ号"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="adminPhone">
          <Col componentClass={ControlLabel} sm={2}>
            身份
          </Col>
          <Col sm={10}>
            <Radio inline>
              在校生
            </Radio>
            {' '}
            <Radio inline>
              毕业生
            </Radio>
          </Col>
        </FormGroup>

      </Form>
    )
  }
}

export  default StuForm;
