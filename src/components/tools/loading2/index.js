/**
 * Created by qoder on 16/6/11.
 */
import React from 'react';
require('./index.css');

const Loading2 = React.createClass({
  render: function () {
    return (
      <div className="loading-2" style={{display:this.props.Show}}>
        <div className="spinner2">
          <div className="spinner-container container1">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </div>
          <div className="spinner-container container2">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </div>
          <div className="spinner-container container3">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </div>
        </div>
      </div>
    )
  }
});


export  default Loading2;
