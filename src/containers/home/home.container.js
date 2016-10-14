/**
 * Created by qoder on 16/10/14.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  HomePage from '../../components/home/homePage';
import {showPhoneMenu, hidePhoneMenu} from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {
    phoneMenu: state.phoneMenu,
    myMsg: state.myMsg
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    showPhoneMenu,
    hidePhoneMenu
  };
  var actionMap = {
    action: bindActionCreators(actions, dispatch)
  };

  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(HomePage);
