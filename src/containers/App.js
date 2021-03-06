/**
 * Created by qoder on 16/6/11.
 */
import App from  '../components/GraduateApp';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import *  as  NEUQAction from  '../actions/neuqst.actions';


function mapStateToProps(state) {
  return {
    is_loading: state.is_loading,
    is_tips: state.is_tips,
    confirm: state.confirm,
    pages: state.pages,
    phoneMenu: state.phoneMenu
  }
}


function mapDispatchToProps(dispatch) {
  var actions = {};
  var actionMap = {action: bindActionCreators(NEUQAction, dispatch)};
  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(App);

