/**
 * Created by qoder on 16-6-7.
 */
import React from 'react';
import './index.css';

const AuthTit = React.createClass({
  render: function () {
    return (
      <span className="title-wrapper">
        <h1 className="brand">NEUQ.<span>大学生就业择业数据平台</span></h1>
        <div className="form-behavior divider" id="common-title">
          <span>{this.props.title}</span>
        </div>
      </span>
    )
  }
});


export default AuthTit;
