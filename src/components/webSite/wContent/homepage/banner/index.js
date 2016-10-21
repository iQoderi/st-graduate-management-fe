import React, {Component} from 'react';
import './index.css';

const banner1 = require('../../../../../images/website/banner/banner1.jpg');
const banner2 = require('../../../../../images/website/banner/banner2.jpg');
const banner3 = require('../../../../../images/website/banner/banner3.jpg');
const banner4 = require('../../../../../images/website/banner/banner4.jpg');

class WBanner extends Component {
  componentDidMount() {
    var mySwiper = new Swiper('.swiper-container', {
      mode: 'horizontal',
      loop: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      autoplay: 3000,
    });
  }

  render() {
    return (
      <div className="slider">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={banner1} alt="第一张图片"/>
            </div>
            <div className="swiper-slide">
              <img src={banner2}/>
            </div>
            <div className="swiper-slide">
              <img src={banner3}/>
            </div>
            <div className="swiper-slide">
              <img src={banner4}/>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    )
  }
}

export default WBanner;
