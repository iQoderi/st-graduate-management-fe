import React from 'react';
import UnderlineTitle from '../../underlineTitle';
import IntroWord from './introduceWord';
import UseIntro from './useIntro';
import './index.css';

const Introduce = ()=> {
  return (
    <div className="w-intro-wrapper">
      <UnderlineTitle title="平台简介"/>
      <IntroWord/>
      <UnderlineTitle title="使用说明"/>
      <UseIntro/>
    </div>
  )
};

export default Introduce;
