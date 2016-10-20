/**
 * Created by qoder on 16-10-19.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.css';

class WNavigationBar extends Component {
  render() {
    return (
      <div id="w-nav" className="w-nav">
        <ul className="com-width">
          <li><Link to="/website/homepage">首页</Link></li>
          <li><Link to="/website/introduce">平台简介</Link></li>
          <li><Link to="/home/personal">个人中心</Link></li>
          <li><Link to="/home/queryMsg">就业查询</Link></li>
          <li><Link to="/website/connectUs">联系方式</Link></li>
        </ul>
      </div>
    )
  }
}

export default WNavigationBar;
