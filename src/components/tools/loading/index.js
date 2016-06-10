/**
 * Created by qoder on 16/6/11.
 */
import React from 'react';
require('./index.css');

const Loading = React.createClass({
  render: function () {
    return (
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    )
  }
});


export  default Loading;
