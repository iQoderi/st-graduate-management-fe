/**
 * Created by qoder on 16/9/25.
 */
import {GET_GRADUATE_FAIL, GET_GRADUATE_SUCC} from '../actions/consts';

const initialState = {};

export default  function graduate(state = initialState, action) {
  switch (action.type) {
    case GET_GRADUATE_SUCC:
      return action.graduate;
    case GET_GRADUATE_FAIL:
      return initialState;
    default:
      return state;
  }
}
