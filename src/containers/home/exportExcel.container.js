/**
 * Created by qoder on 16/8/12.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  ExportExcel from '../../components/home/content/exportExcel';
import {exportStu} from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  var actionMap = {
    action: bindActionCreators({
      exportStu
    }, dispatch)
  };

  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(ExportExcel);
