/**
 * Created by qoder on 16-8-12.
 */
import {SHOW_SEARCH_STU, HIDE_SEARCH_STU} from  '../actions/consts';

export default  function isSearchStu(state = false, action) {
  switch (action.type) {
    case SHOW_SEARCH_STU:
      return true;
    case HIDE_SEARCH_STU:
      return false;
    default:
      return state;
  }
}
