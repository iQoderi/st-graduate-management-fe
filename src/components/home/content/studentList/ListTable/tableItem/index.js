/**
 * Created by qoder on 16-6-23.
 */
import React,{Component} from 'react';

class Tr extends Component{
  BlockStu() {

  }
  render() {
    const {id,index,name,academy,major,studentId,role,phone,email,QQNumber,isBlock}=this.props.student;
    const {blockAccount}=this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{name}</td>
        <td>{academy}</td>
        <td>{major}</td>
        <td>{this.props.student.class}</td>
        <td>{studentId}</td>
        <td>{role}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{QQNumber}</td>
        <td>{isBlock?"冻结中":"使用正常"}</td>
        <td className="opr-admin">
          <span
            style={{display:!isBlock?'none':'inline-block'}}
            className="edit-admin"
            onClick={()=>{blockAccount(id,1)}}>解冻账户</span>
          <span
            style={{display:isBlock?'none':'inline-block'}}
            className="text-danger"
            onClick={()=>{blockAccount(id,0)}}>冻结账户</span>
        </td>
      </tr>
    )
  }
}


export  default Tr;
