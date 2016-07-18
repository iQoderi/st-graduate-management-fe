/**
 * Created by qoder on 16/6/6.
 */
import React from  'react';
import {
  Panel, ListGroup,
  ListGroupItem,
  Button
} from 'react-bootstrap';
require('./index.css');
const PersonalCenter = React.createClass({
  render: function () {
    return (
      <div className="personal-wrapper">
        <Panel style={{border:'none'}}>
          <ListGroup fill>
            <ListGroupItem>学号:<span className='personal-item-detail'>5143209</span></ListGroupItem>
            <ListGroupItem>姓名:<span className='personal-item-detail'>齐超</span></ListGroupItem>
            <ListGroupItem>院系<span className='personal-item-detail'>数学与统计学院</span></ListGroupItem>
            <ListGroupItem>专业:<span className='personal-item-detail'>信息与计算科学</span></ListGroupItem>
            <ListGroupItem>班级:<span className='personal-item-detail'>51432</span></ListGroupItem>
            <ListGroupItem>是否毕业:<span className='personal-item-detail'>否</span></ListGroupItem>
            <span>修改</span>
            <Button bsStyle="primary" className="normal-btn edit-personal-btn">完成</Button>
          </ListGroup>

        </Panel>
      </div>
    )
  }
});


export  default PersonalCenter;
