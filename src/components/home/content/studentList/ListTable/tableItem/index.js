/**
 * Created by qoder on 16-6-23.
 */
import React,{Component} from 'react';

class Tr extends Component{
  BlockStu() {

  }
  render() {
    return (
      <tr>
        <td>31231</td>
        <td>31231</td>
        <td>31231</td>
        <td>31231</td>
        <td>31231</td>
        <td>31231</td>
        <td>31231</td>
        <td>31231</td>
        <td>31231</td>
        <td>31231</td>
        <td>31231</td>
        <td className="opr-admin">
          <span className="edit-admin" onClick={this.editAdmin}>解冻账户</span>
          <span className="text-danger" onClick={this.rmAdmin}>冻结账户</span>
        </td>
      </tr>
    )
  }
}


export  default Tr;
