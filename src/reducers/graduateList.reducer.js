/**
 * Created by qoder on 16-8-12.
 */
import {SEARCH_STU_SUCC, SEACH_STU_FAIL} from '../actions/consts';

const initialState = {
  count: 0,
  pages: [],
  cur: 1,
  body: {}
};

export default  function graduateList(state = initialState, action) {
  switch (action.type) {
    case SEARCH_STU_SUCC:
      return {
        count: action.count,
        pages: action.pages,
        cur: action.cur,
        body: action.body
      };
    case SEACH_STU_FAIL:
      return initialState;
    default:
      return state;
  }
}
