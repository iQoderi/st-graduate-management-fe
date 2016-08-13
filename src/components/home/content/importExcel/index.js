/**
 * Created by qoder on 16/6/6.
 */
import  React, {Component} from 'react';
require('./index.css');

class ImportExcelBox extends Component {
  constructor(props) {
    super(props);
    this.handleSelectFile = this.handleSelectFile.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.verifyFileType = this.verifyFileType.bind(this);
    this.uploadExcel=this.uploadExcel.bind(this);
  }

  verifyFileType(file) {
    if (file) {
      const type = file.name.split(".").pop();
      if (type === 'xlsx') {
        return file;
      } else {
        this.props.action.ayncCloseTips('请上传xlxs格式的文件');
        return false;
      }
    } else {
      throw new Error('arguments can not be null');
    }
  }

  handleSelectFile() {
    const file = this.verifyFileType(document.getElementById('inputExcel').files[0]);
    if (file) {
      this.uploadExcel(file);
    } else {
      return false;
    }
  }

  uploadExcel(file){
    this.props.action.uploadExcel(file);
  }
  handleDrop(e) {
    e.preventDefault();
    const file = this.verifyFileType(e.dataTransfer.files[0]);
    if (file) {
      this.uploadExcel(file);
    } else {
      return false;
    }
  }

  render() {
    return (
      <div
        onDrop={this.handleDrop}
        className="importDevice">
        <input
          onChange={this.handleSelectFile}
          ref="inputExcel"
          id="inputExcel"
          type="file" className="excel-file ng-isolate-scope"
          accept=".xls,.xlsx" multiple={false}/>
        <span className="addexcel-tips">点击或者拖拽文件到此处</span>
      </div>
    )
  }
}


export  default ImportExcelBox;
