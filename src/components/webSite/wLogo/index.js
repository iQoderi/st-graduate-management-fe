import React from 'react';
import {Link} from 'react-router';
import './index.css';
import Logo from '../../../images/website/wLogo.png';

const WLogo = (props)=> {
  return (
    <div className="logo comwidth">
      <div className="comwidth clearfix">
        <Link to="/">
          <img src={Logo} alt="东北大学秦皇岛分校大学生就业择业数据平台"/>
        </Link>
      </div>
    </div>
  )
};


export default WLogo;
