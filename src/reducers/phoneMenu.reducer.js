/**
 * Created by qoder on 16/10/14.
 */
import {SHOW_PHONE_MENU, HIDE_PHONE_MENU} from '../actions/consts';

export  default function phoneMenu(state = false, action) {
  switch (action.type) {
    case SHOW_PHONE_MENU:
      return true;
    case HIDE_PHONE_MENU:
      return false;
    default:
      return state;
  }
}
