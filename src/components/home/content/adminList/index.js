/**
 * Created by qoder on 16/6/6.
 */
import React from  'react';
import ListTable from './ListTable'
require('./index.css');


const AdminList=React.createClass({
  render:function () {
    return (
      <div className="adminList-wrapper">
        <ListTable/>
      </div>
    )
  }
});


export  default AdminList;
