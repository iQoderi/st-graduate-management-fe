/**
 * Created by qoder on 16/6/11.
 */
import React from 'react';
require('./index.css');

const TopTips = React.createClass({
  handClick: function (e) {
    console.log(e);
    console.log(12232);
  },
  render: function () {
    console.log(this.props.text)
    return (
      <div>
      <span className="TopTips" style={{display:this.props.Show}}>
        {this.props.text}
      </span>
        <button onClick={()=>{this.props.addClick('哈哈,傻逼儿子')}}>Show</button>
        <button onClick={()=>{this.props.addClick2()}} style={{marginTop:'100px'}}>Hide</button>
      </div>
    )
  }

});

export  default TopTips;
