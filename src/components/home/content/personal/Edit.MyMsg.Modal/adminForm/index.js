/**
 * Created by qoder on 16/7/20.
 */
import React, {Component} from 'react';
import {
  Form,
  Col,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

class AdminForm extends Component {
  render() {
    const {data}=this.props;
    return (
      <Form horizontal style={{width:'400px'}}>
        <FormGroup controlId="MAdminName">
          <Col componentClass={ControlLabel} sm={2}>
            姓名
          </Col>
          <Col sm={10}>
            <FormControl
              defaultValue={data.name}
              type="text" placeholder="请输入姓名"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="MAdminAcademy">
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
        <FormGroup controlId="MAdminRole">
          <Col componentClass={ControlLabel} sm={2}>
            权限
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass="select" defaultValue={data.role}>
              <option value="管理员">管理员</option>
              <option value="辅导员">辅导员</option>
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup controlId="MAdminCode">
          <Col componentClass={ControlLabel} sm={2}>
            工号
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入工号" defaultValue={data.code}/>
          </Col>
        </FormGroup>
        <FormGroup controlId="MAdminPhone">
          <Col componentClass={ControlLabel} sm={2}>
            手机
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="请输入联系电话" defaultValue={data.phone}/>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export  default AdminForm;
