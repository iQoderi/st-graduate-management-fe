/**
 * Created by qoder on 16-11-2.
 */
import StudentList from  '../../components/home/content/studentList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getStudents,blockAccount} from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {
    students:state.students
  }
}

function mapDispatchToProps(dispatch) {
  var actionMap = {
    action: bindActionCreators({
      getStudents,blockAccount
    }, dispatch)
  };
  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(StudentList);
