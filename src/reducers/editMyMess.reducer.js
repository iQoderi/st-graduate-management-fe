/**
 * Created by qoder on 16/7/19.
 */
import {EDIT_MY_MESS} from '../actions/consts';

const initialState = false;

const isEditMess = function (state = initialState, action) {
  switch (action.type) {
    case EDIT_MY_MESS:
      return true;
    default:
      return state;
  }
};

export  default isEditMess;
