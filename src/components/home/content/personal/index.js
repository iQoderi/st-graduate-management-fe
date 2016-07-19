/**
 * Created by qoder on 16/6/6.
 */
import React from  'react';
import {
  Panel,
  Button
} from 'react-bootstrap';
require('./index.css');
import 'whatwg-fetch';
import  Teacher from './Admin';
import Student from './Stutents';

import Loading from '../../../tools/loading2';
import getToken from '../../../../library/getToken';
import API from '../../../../api/requsetConfig';


const PersonalCenter = React.createClass({
  componentWillMount: function () {
    const token = getToken();
    const {getMyMess}=this.props.action;
    const {myMsg}=this.props;
    const _this = this;
    fetch(API.my, {
      headers: {
        Token: token
      }
    }).then((res)=> {
      return res.json();
    }).then((json)=> {
      console.log(json.data.users.role);
      if (json.data.users.role === '学生') {
        getMyMess(json.data.users.students);
      } else {
        getMyMess(json.data.users.teacher);
      }
    })
  },
  componentDidMount: function () {
    const token = getToken();
    const {getMyMess}=this.props.action;
    const {myMsg}=this.props;
    const _this = this;
    fetch(API.my, {
      headers: {
        Token: token
      }
    }).then((res)=> {
      return res.json();
    }).then((json)=> {
      console.log(json.data.users.role);
      if (json.data.users.role === '学生') {
        getMyMess(json.data.users.students);
      } else {
        getMyMess(json.data.users.teacher);
      }
    })
  },
  render: function () {
    const {myMsg}=this.props;
    let MSGLIST = '';
    if (myMsg.role !== '管理员') {
      MSGLIST = <Student data={myMsg}/>
    } else {
      MSGLIST = <Teacher data={myMsg}/>
    }

    return (
      <div className="personal-wrapper">
        <Panel style={{border:'none'}}>
          {MSGLIST}
          <span>修改</span>
          <Button bsStyle="primary" className="normal-btn edit-personal-btn">完成</Button>
        </Panel>
      </div>
    )
  }
});


export  default PersonalCenter;
