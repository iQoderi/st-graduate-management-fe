'use strict';

import React from 'react';
import {Link} from 'react-router';
import Logo from '../../../images/website/wLogo.png';
import stLogo from '../../../images/website/stLogo.jpg';
import './index.css';

const WFooter = ()=> {
  let friendLinks = [
    {
      title: '研究生分院',
      link: 'http://graduate.neuq.edu.cn/',
    },
    {
      title: '经济学院',
      link: 'http://jjxy.neuq.edu.cn/',
    },
    {
      title: '管理学院',
      link: 'http://glxy.neuq.edu.cn/'
    },
    {
      title: '计算机与通信工程学院',
      link: 'http://jsjytx.neuq.edu.cn/'
    },
    {
      title: '控制工程学院',
      link: 'http://kzgc.neuq.edu.cn/'
    },
    {
      title: '语言学院',
      link: 'http://yyxy.neuq.edu.cn/'
    },
    {
      title: '数学与统计学院',
      link: 'http://stxy.neuq.edu.cn/'
    },
    {
      title: '资源与材料学院',
      link: 'http://zycl.neuq.edu.cn/'
    },
    {
      title: '体育部',
      link: 'http://tyb.neuq.edu.cn/'
    }
  ];
  friendLinks = friendLinks.map((link, index)=> {
    return (
      <li className="fl"><a href={link.link} target="_blank">{link.title}</a></li>
    )
  });
  return (
    <div className="w-footer-wrapper">
      <div id="w-footer">
        <div className="comwidth clearfix w-footer">
          <div className="footerl fl">
            <h3>友情链接</h3>
            <ul>
              {friendLinks}
            </ul>
          </div>
          <div className="footerc fl">
            <Link to="/">
              <img src={Logo} alt="东北大学秦皇岛分校就业择业数据平台"/>
            </Link>
          </div>
          <div className="footerr fl">
            <a href="http://stxy.neuq.edu.cn/" target="_blank">
              <img src={stLogo} alt=""/>
            </a>
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
