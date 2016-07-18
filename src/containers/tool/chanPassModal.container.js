/**
 * Created by qoder on 16-6-15.
 */
import ChanPassModal from  '../../components/tools/chanPassModal';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  hideChanPass,
  showLoading,
  hideLoading,
  showTips,
  hideTips
} from  '../../actions/neuqst.actions.js';


function mapStateToProps(state) {
  return {
    is_chanPass: state.is_changePass
  }
}

function mapDispatchToProps(dispatch) {
  var actions = {};
  var actionMap = {
    action: bindActionCreators({
      hideChanPass: hideChanPass,
      showLoading,
      showTips,
      hideLoading,
      hideTips
    }, dispatch)
  };
  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(ChanPassModal);
