/**
 * Created by qoder on 16/8/11.
 */
import AddGraduate from '../../components/home/content/addGraduate';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  showLoading,
  showTips,
  hideLoading,
  hideTips
} from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  var actions = {};
  var actionMap = {
    action: bindActionCreators({
      showLoading: showLoading,
      showTips: showTips,
      hideLoading: hideLoading,
      hideTips: hideTips
    }, dispatch)
  };
  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(AddGraduate);
