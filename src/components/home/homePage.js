import React, {Component} from 'react';
import NavgaionBar from './navgationbar'
import SideBar from  '../../containers/home/sideBar.container';
import Personal from '../../containers/home/personalCenter.container';
import Footer from './footer/index';
import ChanPassModal from '../../containers/tool/chanPassModal.container';
import PhoneDropMenu from '../../components/tools/PhoneDropMenu';
import './home.css';

class Home extends Component {
  render() {
    const {action, phoneMenu, myMsg}=this.props;
    return (
      <div className="home-wrapper">
        <div className="sideBar">
          <SideBar/>
        </div>
        <div className="home-content">
          <div className="row border-bottom">
            <NavgaionBar phoneMenu={phoneMenu} action={action}/>
            <PhoneDropMenu action={action} phoneMenu={phoneMenu} myMsg={myMsg}/>
            <ChanPassModal/>
            <div className="home-inline-content">
              {this.props.children ||<Personal/>}
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
