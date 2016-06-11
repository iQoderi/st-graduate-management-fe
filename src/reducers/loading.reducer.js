/**
 * Created by qoder on 16/6/11.
 */
import {SHOW_LOADING, HIDE_LOADING} from '../actions/consts';

export  default function is_loading(state = 'none', action) {
  switch (action.type) {
    case SHOW_LOADING:
      return 'block';
    case HIDE_LOADING:
      return 'none';
    default:
      return state;
  }
}
