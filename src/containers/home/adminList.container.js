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
  changePageSucc,
  showConfirm,
  hideConfirm,
  showEditAdmin,
  hideEditAdmin,
  showChangeAdminPass, 
  hideChangeAdminPass
} from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {
    pages: state.pages,
    confirm: state.confirm,
    editAdmin: state.editAdmin,
    changeAdminPass:state.changeAdminPass
  }
}

function mapDispatchToProps(dispatch) {
  var actionMap = {
    action: bindActionCreators({
      showLoading: showLoading,
      showTips: showTips,
      hideLoading: hideLoading,
      hideTips: hideTips,
      changePageSucc: changePageSucc,
      showConfirm: showConfirm,
      hideConfirm: hideConfirm,
      showEditAdmin: showEditAdmin,
      hideEditAdmin: hideEditAdmin,
      showChangeAdminPass,
      hideChangeAdminPass
    }, dispatch)
  };
  
  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(AdminList);
