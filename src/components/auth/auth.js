/**
 * Created by qoder on 16-5-15.
 */
import React from  'react';
require('./auth.css');
const AuthPage = React.createClass({
  render: function () {
    return (
      <div className="wrapper">
        <div className="form-container">
          {this.props.children}
        </div>
        <div className="copyright">&copy; 2016 东北大学秦皇岛分校数学与统计学院</div>
      </div>
    )
  }
});

export default AuthPage;
