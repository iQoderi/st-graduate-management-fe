/**
 * Created by qoder on 16/8/13.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ImportExcel from '../../components/home/content/importExcel';
import {ayncCloseTips,uploadExcel} from '../../actions/neuqst.actions';
function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  var actionMap = {
    action: bindActionCreators({
      ayncCloseTips,
      uploadExcel
    }, dispatch)
  };

  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(ImportExcel);