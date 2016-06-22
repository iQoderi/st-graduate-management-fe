/**
 * Created by qoder on 16-6-23.
 */
/**
 *
 * Created by qoder on 16/6/6.
 */
import React from 'react';

const Tr = React.createClass({
  rmAdmin:function () {
    console.log(this.props);
    console.log('called');
  },
  render: function () {
    const {data,key}=this.props;
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
          <span className="edit-admin">编辑</span>
          <span className="text-danger" onClick={this.rmAdmin}>删除</span>
        </td>
      </tr>
    )
  }
});


export  default Tr;
