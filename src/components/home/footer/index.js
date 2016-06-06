/**
 * Created by qoder on 16-6-5.
 */
import React from 'react';

require('./index.css');
const Footer=React.createClass({
  render:function () {
    return (
      <div className="footer">
        <div className="pull-right">©2016
          <a href="http://stxy.neuq.edu.cnt/" target="_blank">数学与统计学院</a>
        </div>
      </div>
    )
  }
});

export  default Footer;
