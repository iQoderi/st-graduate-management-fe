/**
 * Created by qoder on 16-11-2.
 */
import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import Tr from './tableItem';
import './index.css';
class Listtable extends Component{
  render() {
    const {page,size,students}=this.props.students;
    const {blockAccount}=this.props.action;
    const pages=students.map((student,index)=>{
      student.index=(page-1)*size+index+1;
      return (<Tr student={student} blockAccount={blockAccount}/>)
    });
    return (
      <Table responsive>
        <thead>
        <tr>
          <th>#</th>
          <th>姓名</th>
          <th>学院</th>
          <th>专业</th>
          <th>班级</th>
          <th>学号</th>
          <th>身份</th>
          <th>手机</th>
          <th>邮箱</th>
          <th>QQ(微信)</th>
          <th>账户使用情况</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        {pages}
        </tbody>
      </Table>
    )
  }
}
export  default Listtable;
