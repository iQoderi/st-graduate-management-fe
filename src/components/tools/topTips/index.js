/**
 * Created by qoder on 16/6/11.
 */
import React from 'react';
require('./index.css');

const TopTips = React.createClass({
  handClick:function (e) {
    console.log(e);
    console.log(12232);
  },
  render: function () {
    return (
      <div>
      <span className="TopTips" style={{display:this.props.Show}}>
      账号或者密码错误
      </span>
        <button onClick={this.handClick()}  data="1"  ww={this.props.addClick}>SHow</button>
      </div>
    )
  }

});

export  default TopTips;
