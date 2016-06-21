/**
 *
 * Created by qoder on 16/6/6.
 */
import React from 'react';
import ReactBootstrap, {Table} from 'react-bootstrap';

require('./index.css');
const Listtable = React.createClass({
  render: function () {
    const {page}=this.props;
    const pages=page.map((each,index)=>{
      return (
        <tr>
          <td>{index+1}</td>
          <td>{each.teacher[0].code}</td>
          <td>{each.teacher[0].name}</td>
          <td>{each.teacher[0].academy}</td>
          <td>{each.teacher[0].role}</td>
          <td>{each.teacher[0].email}</td>
          <td>{each.teacher[0].phone}</td>
          <td className="opr-admin">
            <span className="edit-admin">编辑</span>
            <span className="text-danger">删除</span>
          </td>
        </tr>
      )
    });
    return (
      <Table responsive hover>
        <thead>
        <tr>
          <th>#</th>
          <th>工号</th>
          <th>姓名</th>
          <th>学院</th>
          <th>职位</th>
          <th>邮箱</th>
          <th>联系电话</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        {pages}
        </tbody>
      </Table>
    )
  }
});


export  default Listtable;
