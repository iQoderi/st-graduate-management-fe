/**
 *
 * Created by qoder on 16-6-14.
 */
import React from 'react';
import {Button, Modal, Form, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap';
require('./index.css');
const ChanPassModal = React.createClass({
  render() {
    var {is_chanPass,action} =this.props;
    console.log(this.props);
    const formInstance = (
       
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail1">
          <Col componentClass={ControlLabel} sm={2}>
            旧密码
          </Col>
          <Col sm={8}>
            <FormControl type="password" placeholder="密码(6-16位数字字母或者下划线)"/>
          </Col>
        </FormGroup>
        
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            新密码
          </Col>
          <Col sm={8}>
            <FormControl type="password" placeholder="密码(6-16位数字字母或者下划线)"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            重复密码
          </Col>
          <Col sm={8}>
            <FormControl type="password" placeholder="重复密码"/>
          </Col>
        </FormGroup>
      </Form>
    );
    return (
      <div className="modal-container">
        <Modal
          show={is_chanPass}
          onHide={action.hideChanPass}
          container={this}
          aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">修改密码</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {formInstance}
          </Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="primary"
              style={{width:"80px",borderRadius:'5px'}}
              onClick={action.hideChanPass}>确认</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default ChanPassModal;
