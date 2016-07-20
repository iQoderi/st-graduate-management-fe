/**
 * Created by qoder on 16/7/19.
 */
import React, {Component} from 'react';

import {
  Panel,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

class Student extends Component {
  render() {
    const {data}=this.props;
    return (
      <Panel style={{border:'none'}}>
        <ListGroup fill>
          <ListGroupItem>姓名:<span className='personal-item-detail'>{data.name}</span></ListGroupItem>
          <ListGroupItem>学号:<span className='personal-item-detail'>{data.studentId}</span></ListGroupItem>
          <ListGroupItem>院系:<span className='personal-item-detail'>{data.academy}</span></ListGroupItem>
          <ListGroupItem>专业:<span className='personal-item-detail'>{data.major}</span></ListGroupItem>
          <ListGroupItem>班级:<span className='personal-item-detail'>{data.class}</span></ListGroupItem>
          <ListGroupItem>身份:<span className='personal-item-detail'>{data.role}</span></ListGroupItem>
          <ListGroupItem>手机号:<span className='personal-item-detail'>{data.phone}</span></ListGroupItem>
          <ListGroupItem>邮箱:<span className='personal-item-detail'>{data.email}</span></ListGroupItem>
          <ListGroupItem>QQ号:<span className='personal-item-detail'>{data.QQNumber}</span></ListGroupItem>
        </ListGroup>
      </Panel>
    )
  }
}


export  default Student;
