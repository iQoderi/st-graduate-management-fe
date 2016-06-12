/**
 * Created by qoder on 16/6/11.
 */
import React from 'react';
require('./index.css');

const TopTips = React.createClass({
  handClick: function (tip) {
    // const {addClick, addClick2}=this.props;
    this.props.addClick(tip);
    setTimeout(this.props.addClick2, 2000);
  },
  render: function () {
    return (
      <div>
      <span className="TopTips" style={{display:this.props.Show}}>
        {this.props.text}
      </span>
        <button onClick={()=>{this.handClick('账号或者密码错误')}}>Show</button>
      </div>
    )
  }

});

export  default TopTips;
