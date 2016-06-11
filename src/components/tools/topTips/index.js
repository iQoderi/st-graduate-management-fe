/**
 * Created by qoder on 16/6/11.
 */
import React from 'react';
require('./index.css');

const TopTips = React.createClass({
  render: function () {
    return (
      <span className="TopTips">
      账号或者密码错误
      </span>
    )
  }
  
});

export  default TopTips;
