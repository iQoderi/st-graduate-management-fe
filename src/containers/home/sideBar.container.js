/**
 * Created by qoder on 16-6-14.
 */
import SideBar from  '../../components/home/sideBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showDropMenu, hideDropMenu, showChanPass} from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {
    is_dropMenu: state.is_dropMenu
  }
}

function mapDispatchToProps(dispatch) {
  var actions = {};
  var actionMap = {
    action: bindActionCreators({
      showDropMenu: showDropMenu,
      hideDropMenu: hideDropMenu,
      showChanPass: showChanPass
    }, dispatch)
  };
  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(SideBar);
