import React from 'react';
import WTopBar from '../wTopBar';
import WLogo from '../wLogo';
import WNavigationBar from '../WNavigationBar';
import WPNavigator from '../wPNavigator';
import  WDropMenu  from '../wDropMenu';
import './index.css';

const WHeader = ({action,wphoneMenu})=> {

    return (
      <div className="w-header-wrapper">
        <div className="w-header">
          <WTopBar/>
          <WLogo/>
          <WNavigationBar/>
        </div>
        <div className="wp-header">
          <WPNavigator wphoneMenu={wphoneMenu} action={action}/>
        </div>
        <div className="wp-dropmenu-wrapper">
          <WDropMenu wphoneMenu={wphoneMenu} action={action}/>
        </div>
      </div>
    )
};

export default WHeader;
