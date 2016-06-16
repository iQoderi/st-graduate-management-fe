import  React from 'react';
import NavgaionBar from './navgationbar'
import Loading from '../tools/loading';
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
              {this.props.children}
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
});


export default Home;
