/**
 * Created by qoder on 16-10-19.
 */
import React, {Component} from 'react';
import WHomepage from './wContent/homepage';
import WHeader from '../../containers/website/wheader.container';
import WFooter from './wFooter';

import './index.css';

class WebSite extends Component {
  render() {
    return (
      <div className="website-wrapper">
        <WHeader/>
        {this.props.children||<WHomepage/>}
        <WFooter/>
      </div>
    )
  }
}

export default WebSite;
