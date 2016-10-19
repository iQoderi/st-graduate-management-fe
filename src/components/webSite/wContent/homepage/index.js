import React, {Component} from 'react';
import 'swiper/dist/css/swiper.css';
import 'swiper/dist/js/swiper';
import WBanner from  './banner';
import './index.css';

class WHomepage extends Component {
    render() {
        return (
            <div className="w-homepage">
              <WBanner/>
            </div>
        )
    }
}

export default WHomepage;
