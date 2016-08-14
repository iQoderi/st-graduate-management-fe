/**
 * Created by qoder on 16/8/13.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ImportExcel from '../../components/home/content/importExcel';
import {ayncCloseTips, uploadExcel, showExcelModal, closeExcelModal} from '../../actions/neuqst.actions';
function mapStateToProps(state) {
  return {
    isShowExcelTpl: state.isShowExcelTpl
  }
}

function mapDispatchToProps(dispatch) {
  var actionMap = {
    action: bindActionCreators({
      ayncCloseTips,
      uploadExcel,
      showExcelModal,
      closeExcelModal
    }, dispatch)
  };

  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(ImportExcel);
