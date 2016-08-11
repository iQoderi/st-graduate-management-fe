/**
 * Created by qoder on 16/7/19.
 */
import {GET_MY_MESS} from '../actions/consts';

const initialState = null;


const myMsg = function (state = initialState, action) {
  switch (action.type){
    case GET_MY_MESS:
          return action.users;
    default:
          return state;
  }
};


export  default myMsg;
