/**
 * Created by qoder on 16/6/23.
 */
import {SHOW_CONFIRM, HIDE_CONFIRM} from '../actions/consts';
const initialState = {display: 'none'};

const confirm = function (state = initialState, action) {
  switch (action.type) {
    case SHOW_CONFIRM:
      return {
        display: action.show,
        header: action.header,
        body: action.body,
        id: action.id
      };
    case  HIDE_CONFIRM:
      return {
        display: action.show
      };
    default:
      return state;
  }
};

export default confirm;
