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
import EditMyMsg from './Edit.MyMsg.Modal';
import getToken from '../../../../library/getToken';
import API from '../../../../api/requsetConfig';


const PersonalCenter = React.createClass({
  editMyMsg: function () {
    // const _this=this;
    const {editMyMess}=this.props.action;
    editMyMess(true);
  },
  componentWillMount: function () {
    const token = getToken();
    const {getMyMess}=this.props.action;
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
    const {myMsg, isEditMsg}=this.props;
    const {editMyMess, showLoading, hideLoading, showTips, hideTips, getMyMess}=this.props.action;
    let MSGLIST = '';
    if (myMsg.role !== '管理员' && myMsg.role !== '辅导员') {
      MSGLIST = <Student data={myMsg}/>
    } else {
      MSGLIST = <Teacher data={myMsg}/>
    }

    return (
      <div className="personal-wrapper">
        <EditMyMsg myMsg={myMsg}
                   show={isEditMsg}
                   showLoading={showLoading}
                   hideLoading={hideLoading}
                   showTips={showTips}
                   hideTips={hideTips}
                   editMyMess={editMyMess}
                   getMyMess={getMyMess}
        />
        <Panel style={{border:'none'}}>
          {MSGLIST}
          <Button
            onClick={this.editMyMsg}
            bsStyle="primary"
            className="normal-btn edit-personal-btn">修改</Button>
        </Panel>
      </div>
    )
  }
});


export  default PersonalCenter;
