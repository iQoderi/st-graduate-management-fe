/**
 * Created by qoder on 16-10-19.
 */
import React, {Component} from 'react';
import WTopBar from './wTopBar';
import WLogo from './wLogo';
import WNavigationBar from './WNavigationBar';
import WContent from './wContent';
import WFooter from './wFooter';

import './index.css';

class WebSite extends Component {
  render() {
    return (
      <div className="website-wrapper">
        <div className="w-header-wrapper max-widths">
          <WTopBar/>
          <WLogo/>
          <WNavigationBar/>
        </div>
        <WContent/>
        <WFooter/>
      </div>
    )
  }
}

export default WebSite;
