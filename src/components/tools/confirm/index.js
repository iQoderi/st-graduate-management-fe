/**
 * Created by qoder on 16-6-23.
 */
import React from 'react';
import {Modal,Button,} from 'react-bootstrap';
require('./index.css');

const Confirm=React.createClass({
  render:function () {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One fine body...
          </Modal.Body>

          <Modal.Footer>
            <Button id="cancel-btn">取消</Button>
            <Button bsStyle="primary" style={{width:'80px'}}>确认</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    )
  }
});

export default Confirm;
