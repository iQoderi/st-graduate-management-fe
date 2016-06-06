/**
 * Created by everyun on 16/5/14.
 */
import  React from 'react';
import NavgaionBar from './navgationbar'
import SideBar from  './sideBar';
import Content from './content';
import Footer from './footer/index';
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
            <Content/>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
});

export default Home;
