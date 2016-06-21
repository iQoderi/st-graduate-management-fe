/**
 * Created by qoder on 16-6-22.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AdminList from '../../components/home/content/adminList';
import {
  showLoading,
  showTips,
  hideLoading,
  hideTips, 
  changePageSucc
} from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {
    pages:state.pages
  }
}

function  mapDispatchToProps(dispatch) {
  var actions = {};
  var actionMap = {
    action: bindActionCreators({
      showLoading: showLoading,
      showTips: showTips,
      hideLoading: hideLoading,
      hideTips: hideTips,
      changePageSucc:changePageSucc
    }, dispatch)
  };
  
  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(AdminList);
