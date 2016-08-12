/**
 * Created by qoder on 16-8-12.
 */
import React, {Component} from 'react';
import {ButtonToolbar, Modal, Button} from 'react-bootstrap';
import SearchResultTable from '../../home/content/queryStudent/searchResultTable';
import API from '../../../api/requsetConfig';
import getToken from '../../../library/getToken';

import './index.css';

class SearchStuModal extends Component {
  // 构造
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.exportsStu = this.exportsStu.bind(this);
  }

  exportsStu() {
    const {action,graduateList}=this.props;
    action.exportStu(graduateList.body);
  }

  showModal() {
    this.props.action.showSearchStu();
  }

  render() {
    const {isSearchStu, graduateList, action,myMsg}=this.props;
    console.log(myMsg)

    return (
      <ButtonToolbar>
        <Modal
          {...this.props}
          show={isSearchStu}
          bsSize="large"
          onHide={action.hideSearchStu}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              搜索结果
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SearchResultTable
              action={action}
              graduateList={graduateList}/>
          </Modal.Body>
          <Modal.Footer>
            {myMsg.role==='管理员'||myMsg.role==='辅导员'? (<Button
            onClick={this.exportsStu}
            bsStyle='primary'
            style={{width: '80px'}}>
            导出
          </Button>):(
            <Button
              onClick={action.hideSearchStu}
              bsStyle='primary'
              style={{width: '80px'}}>
              关闭
            </Button>)}
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}


export  default  SearchStuModal;
