/**
 * Created by qoder on 16-6-15.
 */
import CompleteMsg from '../../components/auth/completeMsg';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

export  default connect(mapStateToProps,mapDispatchToProps)(CompleteMsg);
