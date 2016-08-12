/**
 * Created by qoder on 16-8-12.
 */
import QueryStu from '../../components/home/content/queryStudent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  hideSearchStu,
  searchStu,
  exportStu
} from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {
    isSearchStu: state.isSearchStu,
    graduateList: state.graduateList,
    myMsg:state.myMsg
  }
}

function mapDispatchToProps(dispatch) {
  var actionMap = {
    action: bindActionCreators({
      hideSearchStu,
      searchStu,
      exportStu
    }, dispatch)
  };
  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(QueryStu);
