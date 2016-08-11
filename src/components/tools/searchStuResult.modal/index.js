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
    // 初始状态
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.exportsStu = this.exportsStu.bind(this);
  }

  exportsStu() {
    this.props.action.exportStu();
  }

  showModal() {
    this.props.action.showSearchStu();
  }

  render() {
    const {isSearchStu, graduateList, action}=this.props;
    const token = getToken();
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
            <Button bsStyle='primary'
                    style={{
                      width: '80px',
                      marginLeft: '20px',
                      float: 'right'
                    }}>
              <a
                className="export-href"
                href={`${API.testExcel}/?Token=${token}`} target="_blank">导出当前页</a>
            </Button>
            <Button bsStyle='primary'
                    style={{width: '80px', float: 'right'}}>
              <a
                className="export-href"
                href={`${API.testExcel}/?Token=${token}`} target="_blank">导出全部</a>
            </Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}


export  default  SearchStuModal;
