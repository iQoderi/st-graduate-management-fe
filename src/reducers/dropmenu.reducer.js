/**
 * Created by qoder on 16-6-14.
 */
import {SHOW_DROPMENU, HIDE_DROPMENU} from '../actions/consts';

export default function isDropMenu(state='none',action) {
  switch (action.type){
    case SHOW_DROPMENU:
          return 'block';
    case HIDE_DROPMENU:
          return 'none';
    default:
          return state;
  }
}

