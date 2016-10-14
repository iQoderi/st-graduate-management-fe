import React, {Component} from 'react';
import NavgaionBar from './navgationbar'
import SideBar from  '../../containers/home/sideBar.container';
import Footer from './footer/index';
import ChanPassModal from '../../containers/tool/chanPassModal.container';
import PhoneDropMenu from '../../components/tools/PhoneDropMenu';
import './home.css';

class Home extends Component {
  render() {
    const {action, phoneMenu}=this.props;
    return (
      <div className="home-wrapper">
        <div className="sideBar">
          <SideBar/>
        </div>
        <div className="home-content">
          <div className="row border-bottom">
            <NavgaionBar phoneMenu={phoneMenu} action={action}/>
            <PhoneDropMenu action={action} phoneMenu={phoneMenu}/>
            <ChanPassModal/>
            <div className="home-inline-content">
              {this.props.children ||
              <span style={{marginLeft: '30px', marginTop: '30px'}}>
                  欢迎来到东北大学秦皇岛分校大学生就业择业中心
                </span>
              }
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
