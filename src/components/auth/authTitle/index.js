/**
 * Created by qoder on 16-6-7.
 */
import React from 'react';
import './index.css';

const AuthTit = React.createClass({
  render: function () {
    return (
      <span className="title-wrapper">
        <div className="form-behavior divider" id="common-title">
          <span>{this.props.title}</span>
        </div>
      </span>
    )
  }
});


export default AuthTit;
