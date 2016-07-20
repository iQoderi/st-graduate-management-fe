/**
 * Created by qoder on 16/7/20.
 */
import React, {Component} from 'react';
import {
  Button,
  Modal
} from 'react-bootstrap';
import AdminForm from './adminForm';
import StuForm from './studentForm';


class EditMyMsg extends Component {
  closeModal() {
    const _this = this;
    const {editMyMess}=_this.props;
    editMyMess(false);
  }

  render() {
    const {myMsg, show, editMyMess}=this.props;
    if (myMsg.role === '管理员') {
      var my = <AdminForm/>
    } else {
      var my = <StuForm/>
    }
    return (
      <Modal
        show={show}
        onHide={this.closeModal.bind(this)}
        container={this}
        aria-labelledby="contained-modal-title">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">修改个人信息</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {my}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={this.addAdmin}
            type="button" bsStyle="primary"
            style={{width:"80px",borderRadius:'5px'}}>
            确认修改
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}


export  default EditMyMsg;
