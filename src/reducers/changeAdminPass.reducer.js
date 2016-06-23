/**
 * Created by qoder on 16-6-23.
 */
import {SHOW_CHANGE_ADMIN_PASS,HIDE_CHANGE_ADMIN_PASS} from '../actions/consts';

const initialState={
  show:false
};
const changeAdminPass=function (state=initialState,action) {
  switch (action.type){
    case SHOW_CHANGE_ADMIN_PASS:
          return {
            show:action.show,
            id:action.id
          };
    case HIDE_CHANGE_ADMIN_PASS:
          return {
            show:action.show
          };
    default:
          return state;
  }
};

export  default changeAdminPass;
