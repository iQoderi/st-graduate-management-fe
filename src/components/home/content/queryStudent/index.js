/**
 * Created by qoder on 16/6/6.
 */
import React from  'react';
import QuerySTForm from './queryForm';
require('./index.css');

const QueryMsg = React.createClass({
  render: function () {
    return (
      <div className="AddAdmin-wrapper">
        <QuerySTForm/>
      </div>
    )
  }
});


export  default QueryMsg;
