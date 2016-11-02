/**
 * Created by qoder on 16-11-2.
 */
import StudentList from  '../../components/home/content/studentList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {

} from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  var actionMap = {
    action: bindActionCreators({
    }, dispatch)
  };
  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(StudentList);
