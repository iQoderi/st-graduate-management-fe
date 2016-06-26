/**
 * Created by qoder on 16/6/6.
 */
import  React from 'react';
import ExportSTForm from './exportExcelForm/index';
require('./index.css');


const ExportExcelBox = React.createClass({
  render: function () {
    return (
      <div className="AddAdmin-wrapper">
        <ExportSTForm/>
      </div>
    )
  }
});


export  default ExportExcelBox;

