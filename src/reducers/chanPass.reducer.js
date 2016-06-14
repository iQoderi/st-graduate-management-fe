/**
 * Created by qoder on 16-6-15.
 */
import {SHOW_CHANPASS, HIDE_CHANPASS} from '../actions/consts';

const is_changePass = function (state = false, action) {
  switch (action.type) {
    case SHOW_CHANPASS:
      return true;
    case HIDE_CHANPASS:
      return false;
    default:
      return state;

  }
};

export  default is_changePass;
