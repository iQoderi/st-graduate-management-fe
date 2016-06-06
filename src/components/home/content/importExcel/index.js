/**
 * Created by qoder on 16/6/6.
 */
import  React from 'react';

require('./index.css');


const ImportExcelBox=React.createClass({
  render:function () {
    return (
      <div className="importDevice">
        <input type="file" className="excel-file ng-isolate-scope" accept=".xls,.xlsx" multiple=""/>
          <span className="addexcel-tips">点击或者拖拽文件到此处</span>
      </div>
    )
  }
});


export  default ImportExcelBox;
