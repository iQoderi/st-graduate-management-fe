import React from 'react';
import NavgaionBar from './navgationbar'
import SideBar from  '../../containers/home/sideBar.container';
import Footer from './footer/index';
import ChanPassModal from '../../containers/tool/chanPassModal.container';
require('./home.css');
const Home = React.createClass({
  render: function () {
    return (
      <div className="home-wrapper">
        <div className="sideBar">
          <SideBar/>
        </div>
        <div className="home-content">
          <div className="row border-bottom">
            <NavgaionBar/>
            <ChanPassModal/>
            <div className="home-inline-content">
              {this.props.children||
                <span style={{marginLeft:'20px',marginTop:'20px'}}>
                  '欢迎来到东北大学秦皇岛分校大学生就业择业中心'
                </span>
              }
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
});


export default Home;
