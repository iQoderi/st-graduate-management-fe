/**
 * Created by qoder on 16-10-21.
 */
import {SHOW_WPHONE_MENU, HIDE_WPHONE_MENU} from '../actions/consts';

export  default function wphoneMenu(state = false, action) {
  switch (action.type) {
    case SHOW_WPHONE_MENU:
      return true;
    case HIDE_WPHONE_MENU:
      return false;
    default:
      return state;
  }
}
