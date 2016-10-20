import React from 'react';
import UnderlineTitle from '../../underlineTitle';
import './index.css';

const ConnectUs = ()=> {
  return (
    <div className="connectUs-wrapper">
      <UnderlineTitle title="联系方式"/>
      <div className="articleList">
        <span>联系电话:</span><a href="javascript:;">0335-8056635</a>
      </div>
      <div className="articleList">
        <span>联系手机:</span><a href="javascript:;">15033561966</a>
      </div>
      <div className="articleList">
        <span>技术维护:</span><a href="javascript:;">18716037332</a>
      </div>
    </div>
  )
};


export default ConnectUs;
