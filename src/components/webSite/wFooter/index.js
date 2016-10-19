import React from 'react';
import './index.css';
import Logo from '../../../images/website/wLogo.png';
import stLogo from '../../../images/website/stLogo.jpg';

const WFooter = (props)=> {
  return (
    <div className="w-footer-wrapper">
      <div id="w-footer">
        <div className="comwidth clearfix w-footer">
          <div className="footerl fl">
            <h3>友情链接</h3>
            <ul>
              <li className="fl"><a href="#">信息公开</a></li>
              <li className="fl"><a href="#">招标采购</a></li>
              <li className="fl"><a href="#">服务信息</a></li>
              <li className="fl"><a href="#">远程访问</a></li>
              <li className="fl"><a href="#">办公电话</a></li>
              <li className="fl"><a href="#">信息公开</a></li>
              <li className="fl"><a href="#">招标采购</a></li>
              <li className="fl"><a href="#">服务信息</a></li>
              <li className="fl"><a href="#">远程访问</a></li>
              <li className="fl"><a href="#">办公电话</a></li>
              <li className="fl"><a href="#">远程访问</a></li>
              <li className="fl"><a href="#">办公电话</a></li>
              <li className="fl"><a href="#"></a></li>
              <li className="fl"><a href="#"></a></li>
            </ul>
          </div>
          <div className="footerc fl">
            <img src={Logo} alt=""/>
          </div>
          <div className="footerr fl">
            <img src={stLogo} alt=""/>
          </div>
        </div>
      </div>
      <div className="topbar w-footer-bottom">
        版权所有 &copy; 2016 东北大学秦皇岛分校数学与统计学院
      </div>
    </div>
  )
};

export default WFooter;
