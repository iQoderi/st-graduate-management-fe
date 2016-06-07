/**
 * Created by qoder on 16-6-7.
 */
import React from 'react';

const AuthTit = React.createClass({
  render: function () {
    return (
      <span>
        <h1 className="brand">NEUQ.<span>大学生就业择业平台</span></h1>
        <div className="form-behavior divider">
          <span>{this.props.title}</span>
        </div>
      </span>
    )
  }
});


export default AuthTit;
