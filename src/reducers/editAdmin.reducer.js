/**
 *
 * Created by qoder on 16/6/23.
 */
import {SHOW_EDIT_ADMIN, HIDE_EDIT_ADMIN} from '../actions/consts';

const initialState = {
  show: false
};

const editAdmin = function (state = initialState, action) {
  switch (action.type) {
    case SHOW_EDIT_ADMIN:
      return {
        show: action.show,
        data: action.data
      };

    case HIDE_EDIT_ADMIN:
      return {
        show: action.show,
        data:{}
      };

    default:
      return state;
  }
};


export  default editAdmin;
