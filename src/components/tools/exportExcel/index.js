/**
 * Created by qoder on 16/8/12.
 */
import React, {Component} from 'react';
import API  from '../../../api/requsetConfig';
class ExportExcel extends Component {
  constructor(props) {
    super(props);
    this.downloadExcel = this.downloadExcel.bind(this);
  }


  downloadExcel() {
    const {url}=this.props;

  }

  render() {
    return (
      <a className="export-href" href="javascript">
        导出
      </a>
    )
  }
}

export default  ExportExcel;
