/**
 * Created by qoder on 16/6/11.
 */
import {SHOW_LOADING, SHOW_TIPS} from './consts';


export function showloading() {
  return {
    type: SHOW_LOADING
  }
}

export function showTips(tip) {
  return {
    type: SHOW_TIPS,
    tip
  }
}

