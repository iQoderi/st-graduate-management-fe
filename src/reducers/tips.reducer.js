/**
 * Created by qoder on 16/6/11.
 */
import {SHOW_TIPS, HIDE_TIPS} from '../actions/consts';

export default function is_tips(state = 'none', action) {
  switch (action.type) {
    case SHOW_TIPS:
      return 'block';
    case HIDE_TIPS:
      return 'none';
    default:
      return state;
  }
}

