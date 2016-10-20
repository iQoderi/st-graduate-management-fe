/**
 * Created by qoder on 16-5-15.
 */
import React, {Component} from  'react';
import WHeader from '../../containers/website/wheader.container';
import WFooter from '../webSite/wFooter';
require('./auth.css');

class AuthPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <WHeader/>
        <div className="form-container">
          {this.props.children}
        </div>
        <WFooter/>
      </div>
    )
  }
}

export default AuthPage;
