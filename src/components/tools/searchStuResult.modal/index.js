/**
 * Created by qoder on 16-8-12.
 */
import React, {Component} from 'react';
import {ButtonToolbar, Button, Modal} from 'react-bootstrap';
import SearchResultTable from '../../home/content/queryStudent/searchResultTable';
import './index.css';

class SearchStuModal extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.showModal}>
          Launch demo modal
        </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          bsSize="large"
          style={{width: '80%'}}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              搜索结果
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SearchResultTable/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}


export  default  SearchStuModal;
