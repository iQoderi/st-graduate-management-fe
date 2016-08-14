/**
 * Created by qoder on 16/8/14.
 */
import {SHOW_EXCELTPL_MODAl, CLOSE_EXCELTPL_MODAl}from '../actions/consts';

export default  function isShowExcelTpl(state = false, action) {
  switch (action.type) {
    case SHOW_EXCELTPL_MODAl:
      return true;
    case CLOSE_EXCELTPL_MODAl:
      return false;
    default:
      return state;
  }
}
