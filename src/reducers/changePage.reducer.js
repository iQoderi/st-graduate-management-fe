/**
 * Created by qoder on 16-6-21.
 */
import {CHANGE_PAGE_SUCCESS} from '../actions/consts';

let initialState={
  page:[],
  curPage:1,
  count:0
};
const pages = function (state=initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE_SUCCESS:
      return {
        page:action.page,
        curPage:action.curPage,
        count:action.count
      };
    default:
      return state
  }
};

export  default pages;
