/**
 * Created by qoder on 16/6/11.
 */
import App from  '../Router/router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap={action:bindActionCreators(actions,dispatch)};
  return actionMap;
}


export  default connect(mapStateToProps,mapDispatchToProps)(App);

