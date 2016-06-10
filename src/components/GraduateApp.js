/**
 * Created by everyun on 16/5/14.
 */
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TopTips from './tools/topTips';
import Loading2 from './tools/loading2';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
