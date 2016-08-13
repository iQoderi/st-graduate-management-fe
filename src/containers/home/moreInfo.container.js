/**
 * Created by qoder on 16-8-14.
 */
import MoreINfo from '../../components/home/moreInfo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {} from  '../../actions/neuqst.actions.js';

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  var actionMap = {
    action: bindActionCreators({

    }, dispatch)
  };

  return actionMap;
}

export  default connect(mapStateToProps, mapDispatchToProps)(MoreINfo);
