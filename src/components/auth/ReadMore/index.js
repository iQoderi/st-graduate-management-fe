/**
 * Created by qoder on 16-6-7.
 */
import React from 'react';

require('./index.css');
const NEUQLogo = require('../../../images/NEUQ.jpg');
const NEULogo = require('../../../images/NEU.jpg');
const ReadMore = React.createClass({
  render: function () {
    return (
      <div className="read-more">
        <p className="login-tips">你还可以选择跳转到以下网站</p>
        <a href="http://www.neu.edu.cn">
          <img src={NEULogo}/>
        </a>
        <a href="http://www.neuq.edu.cn">
          
          <img src={NEUQLogo}/>
        </a>
      </div>
    )
  }
});


export default ReadMore;
