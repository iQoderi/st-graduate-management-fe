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
import './index.css';


class StuForm extends Component {
  render() {
    const {data}=this.props;
    return (
      <Form horizontal id="addStu-form">
        <FormGroup controlId="MStuName">
          <Col componentClass={ControlLabel} sm={2}>
            姓名
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={data.name}
              type="text" placeholder="请输入姓名"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="MStuAcademy">
          <Col componentClass={ControlLabel} sm={2}>
            学院
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass="select" defaultValue={data.academy}>
              <option value="研究生分院">研究生分院</option>
              <option value="经济学院">经济学院</option>
              <option value="管理学院">管理学院</option>
              <option value="计算机与通信工程学院">计算机与通信工程学院</option>
              <option value="控制工程学院">控制工程学院</option>
              <option value="语言学院">语言学院</option>
              <option value="数学与统计学院">数学与统计学院</option>
              <option value="资源与材料学院">资源与材料学院</option>
              <option value="社会科学研究院">社会科学研究院</option>
              <option value="体育部">体育部</option>
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup controlId="MStuMajor">
          <Col componentClass={ControlLabel} sm={2}>
            专业
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={data.major}
              type="text" placeholder="请输入专业"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="MStuClass">
          <Col componentClass={ControlLabel} sm={2}>
            班级
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={data.class}
              type="text" placeholder="请输入班级"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="MStuCode">
          <Col componentClass={ControlLabel} sm={2}>
            学号
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={data.studentId}
              type="text" placeholder="请输入学号"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="MStuPhone">
          <Col componentClass={ControlLabel} sm={2}>
            手机
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={data.phone}
              type="text" placeholder="请输入联系电话"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="MStuQQNum">
          <Col componentClass={ControlLabel} sm={2}>
            QQ或微信
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={data.QQNumber}
              type="text" placeholder="请输入QQ号或者微信号"/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            身份
          </Col>
          <Col sm={10}>
            <Radio name="role" id="MStuRole1" defaultChecked={data.role==='在校生'} inline>
              在校生
            </Radio>
            {' '}
            <Radio name="role" id="MStuRole2" defaultChecked={data.role==='毕业生'} inline>
              毕业生
            </Radio>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export  default StuForm;
