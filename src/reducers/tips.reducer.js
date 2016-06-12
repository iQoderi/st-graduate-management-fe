/**
 * Created by qoder on 16/6/11.
 */
import {SHOW_TIPS, HIDE_TIPS} from '../actions/consts';

export default function is_tips(state = {display: 'none', text: '账号密码错误'}, action) {
  switch (action.type) {
    case SHOW_TIPS:
      return {
        display: 'block',
        text: action.tip
      };
    case HIDE_TIPS:
      return {
        display: 'none',
        text: ''
      };
    default:
      return state;
  }
}



