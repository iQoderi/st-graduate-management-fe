/**
 * Created by qoder on 16-10-19.
 */
import React, {Component} from 'react';
import WTopBar from './wTopBar';
import WLogo from './wLogo';
import WNavigationBar from './WNavigationBar';
import WFooter from './wFooter';

import './index.css';

class WebSite extends Component {
  render() {
    return (
      <div className="website-wrapper">
        <div className="w-header-wrapper">
          <WTopBar/>
          <WLogo/>
          <WNavigationBar/>
        </div>
        {this.props.children}
        <WFooter/>
      </div>
    )
  }
}

export default WebSite;
