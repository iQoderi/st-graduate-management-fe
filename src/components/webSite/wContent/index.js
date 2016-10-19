import React, {Component} from 'react';
import './index.css';

class WContent extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default WContent;
