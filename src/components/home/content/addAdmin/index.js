/**
 * Created by qoder on 16/6/6.
 */
import React from  'react';
import AddAdminForm from './addAdminForm/index'
require('./index.css');
const AddAdmin=React.createClass({
  render:function () {
    return (
      <div className="AddAdmin-wrapper">
        <AddAdminForm/>
      </div>
    )
  }
});


export  default AddAdmin;
