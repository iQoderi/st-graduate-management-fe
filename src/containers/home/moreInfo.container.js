/**
 * Created by qoder on 16-8-14.
 */
import MoreINfo from '../../components/home/moreInfo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getGraduate, addGraduateMsg, updateGraduate,ayncCloseTips} from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {
    graduate: state.graduate
  }
}

function mapDispatchToProps(dispatch) {
  var actionMap = {
    action: bindActionCreators({
      getGraduate,
      addGraduateMsg,
      updateGraduate,
      ayncCloseTips
    }, dispatch)
  };

  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(MoreINfo);
