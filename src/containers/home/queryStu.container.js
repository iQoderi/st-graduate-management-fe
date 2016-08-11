/**
 * Created by qoder on 16-8-12.
 */
import QueryStu from '../../components/home/content/queryStudent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  showLoading,
  showTips,
  hideLoading,
  hideTips,
  showSearchStu,
  hideSearchStu
} from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {
    isSearchStu: state.isSearchStu
  }
}

function mapDispatchToProps(dispatch) {
  var actionMap = {
    action: bindActionCreators({
      showLoading,
      showTips,
      hideLoading,
      hideTips,
      showSearchStu,
      hideSearchStu
    }, dispatch)
  };
  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(QueryStu);
