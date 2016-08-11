/**
 * Created by qoder on 16/6/11.
 */
import React from 'react';
require('./index.css');

const TopTips = React.createClass({
  render: function () {
    return (
      <span className="TopTips" style={{display:this.props.Show}}>
        {this.props.text}
      </span>
    )
  }

});

export  default TopTips;
