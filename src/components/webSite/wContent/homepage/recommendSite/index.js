'use strict';

import React, {Component} from 'react';
import './index.css';
const helm = require('../../../../../images/website/jobSite/helm.gif');
const neuJob = require('../../../../../images/website/jobSite/neujob.jpg');
const neuqJob = require('../../../../../images/website/jobSite/neuqjob.jpg');
const newJob = require('../../../../../images/website/jobSite/newjobs.gif');


class RecommendSite extends Component {
  render() {
    let jobSites = [
      {
        title: '中国国家人才网',
        link: 'http://www.chinajob.gov.cn',
        imgSrc: newJob
      },
      {
        title: '河北就业网',
        link: 'http://www.he.lm.gov.cn',
        imgSrc: helm
      },
      {
        title: '东北大学就业网',
        link: 'http://job.neu.edu.cn/',
        imgSrc: neuJob
      },
      {
        title: '东北大学秦皇岛分校就业网',
        link: 'http://job.neuq.edu.cn/',
        imgSrc: neuqJob
      }
    ];

    jobSites = jobSites.map((site, index)=> {
      return (
        <li>
          <a href={site.link} title={site.title} target="_blank">
            <img src={site.imgSrc} border="0" width="278" height="69"/>
          </a>
        </li>
      )
    });
    return (
      <div className="recommendSite-wrapper">
        <div className="friendLink_title bt dis">
          <a href="http://job.neuq.edu.cn/" target="_blank">
            &gt;&gt; 更多网站</a>
          推荐就业网站
        </div>
        <ul className="friendLink_img clearfix">
          {jobSites}
        </ul>
      </div>
    )
  }
}

export default RecommendSite;
