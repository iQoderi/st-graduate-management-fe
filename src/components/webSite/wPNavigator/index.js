import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.css';

class WPNavigator extends Component {
  constructor(props) {
    super(props);
    this.showDropMenu = this.showDropMenu.bind(this);
    this.hideDropMenu = this.hideDropMenu.bind(this);
    this.handleDropMenu = this.handleDropMenu.bind(this);
  }


  showDropMenu() {
    this.props.action.showWPhoneMenu();
  }

  hideDropMenu() {
    this.props.action.hideWPhoneMenu();
  }

  handleDropMenu() {
    const {wphoneMenu}=this.props;
    if (wphoneMenu) {
      this.hideDropMenu();
    } else {
      this.showDropMenu();
    }
  }

  render() {
    return (
      <div className="wp-navigator-wrapper">
             <span style={{paddingLeft: '10px'}}>
               <Link to="/">
               NEUQ大学生就业择业数据平台
               </Link>
             </span>
        <i
          onClick={this.handleDropMenu}
          className="fa fa-navicon close-icon"/>
      </div>
    )
  }
}

export default WPNavigator;
