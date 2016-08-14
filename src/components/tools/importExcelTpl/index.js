/**
 * Created by qoder on 16/8/14.
 */
import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './index.css';

const excelTpl = require('../../../images/excel_tpl.png');
const NEUQStExcelTpl = 'http://www.qoder.cn/%E4%B8%9C%E5%8C%97%E5%A4%A7%E5%AD%A6%E7%A7%A6%E7%9A%87%E5%B2%9B%E5%88%86%E6%A0%A1%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%AF%95%E4%B8%9A%E7%94%9F%E5%B0%B1%E4%B8%9A%E6%8B%A9%E4%B8%9A%E8%A1%A8%E6%A8%A1%E6%9D%BF.xlsx';
class ImportExcelTpl extends Component {
  // 构造
  constructor(props) {
    super(props);
    this.hideExceTpl = this.hideExceTpl.bind(this);
  }

  hideExceTpl() {
    this.props.action.closeExcelModal();
  }

  render() {
    const {show}=this.props;
    return (
      <Modal
        show={show}
        onHide={this.hideExceTpl}
        container={this}
        aria-labelledby="contained-modal-title">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">导入excel模板</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="tplImg" src={excelTpl}/>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsStyle="primary"
            style={{width: "80px", borderRadius: '5px'}}
            onClick={this.changePass}>
            <a
              className="download-tpl-btn"
              href={NEUQStExcelTpl}>下载模板</a>
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export  default  ImportExcelTpl;
