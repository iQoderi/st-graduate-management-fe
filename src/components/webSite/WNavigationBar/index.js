/**
 * Created by qoder on 16-10-19.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.css';

class WNavigationBar extends Component {
  render() {
    return (
      <div id="nav" className="nav maxwidth">
        <ul className="com-width">
          <li><Link to="/website/homepage">首页</Link></li>
          <li><Link to="/website/homepage">平台简介</Link></li>
          <li><Link to="/website/homepage">个人中心</Link></li>
          <li><Link to="/website/homepage">就业查询</Link></li>
          <li><Link to="/website/homepage">联系方式</Link></li>
        </ul>
      </div>
    )
  }
}

export default WNavigationBar;
