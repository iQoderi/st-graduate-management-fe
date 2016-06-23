/**
 * Created by qoder on 16-6-23.
 */
/**
 *
 * Created by qoder on 16/6/6.
 */
import React from 'react';

const Tr = React.createClass({
  rmAdmin: function () {
    const {action}=this.props;
    const header = '确认删除?';
    const body = `您确定要删除用户${this.props.data.name}?删除后该用户的信息无法恢复,请谨慎操作!`;
    const id = this.props.id;
    const callback = this.props.callback;
    action.showConfirm(header, body, id);
  },
  editAdmin: function () {
    const {showEditAdmin}=this.props.action;
    const data = this.props.data;
    showEditAdmin(data);
  },
  render: function () {
    const {data}=this.props;
    return (
      <tr>
        <td>{data.index}</td>
        <td>{data.code}</td>
        <td>{data.name}</td>
        <td>{data.academy}</td>
        <td>{data.role}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td className="opr-admin">
          <span className="edit-admin" onClick={this.editAdmin}>编辑</span>
          <span className="edit-admin" onClick={this.editAdmin}>修改密码</span>
          <span className="text-danger" onClick={this.rmAdmin}>删除</span>
        </td>
      </tr>
    )
  }
});


export  default Tr;
