/**
 * Created by qoder on 16-11-2.
 */
import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import Tr from './tableItem';
import './index.css';
class Listtable extends Component{
  render() {
    // const {page, action}=this.props;
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
          <th>账户是否被冻结</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <Tr/>
        </tbody>
      </Table>
    )
  }
}
export  default Listtable;
