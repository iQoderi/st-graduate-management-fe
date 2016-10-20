/**
 * Created by qoder on 16-10-21.
 */
import WHeader from  '../../components/webSite/WHeader';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  showWPhoneMenu,
  hideWPhoneMenu
} from  '../../actions/neuqst.actions.js';


function mapStateToProps(state) {
  return {
    wphoneMenu:state.wphoneMenu
  }
}

function mapDispatchToProps(dispatch) {
  var actions = {};
  var actionMap = {
    action: bindActionCreators({
      showWPhoneMenu,
      hideWPhoneMenu
    }, dispatch)
  };
  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(WHeader);
