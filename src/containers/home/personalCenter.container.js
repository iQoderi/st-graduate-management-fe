/**
 * Created by qoder on 16/7/19.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PersonalCenter from '../../components/home/content/personal';
import {
  getMyMess,
  editMyMess,
  showLoading,
  hideLoading,
  showTips,
  hideTips
} from '../../actions/neuqst.actions';

function mapStateToProps(state) {
  return {
    myMsg: state.myMsg,
    isEditMsg: state.isEditMsg
  }
}


function mapActionToProps(dispatch) {
  const actionMap = {
    action: bindActionCreators({
      getMyMess,
      editMyMess,
      showLoading,
      hideLoading,
      showTips,
      hideTips
    }, dispatch)
  };
  return actionMap;
}

export  default connect(mapStateToProps, mapActionToProps)(PersonalCenter);
