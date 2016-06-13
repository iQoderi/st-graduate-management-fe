/**
 * Created by qoder on 16-6-13.
 */
import LoginBox from '../../components/auth/login/login';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import *  as  NEUQAction from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {
    is_loading:state.is_loading,
    is_tips:state.is_tips
  }
}


function mapDispatchToProps(dispatch) {
  var  actions = {};
  var actionMap={action:bindActionCreators(NEUQAction,dispatch)};
  return actionMap;
}

export  default connect(mapStateToProps,mapDispatchToProps)(LoginBox);
