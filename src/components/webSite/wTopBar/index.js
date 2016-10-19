import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.css';

class TopBar extends Component {
  render() {
    return (
      <div className="w-topBar">
        <div className="topbar clearfix">
          <ul className="fr">
            <li><Link to="/auth/login">登录</Link></li>
            <li><Link to="/auth/register">注册</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TopBar;
