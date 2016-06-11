/**
 * Created by qoder on 16/6/11.
 */
import {SHOW_LOADING, SHOW_TIPS, HIDE_LOADING, HIDE_TIPS} from './consts';


export function showLoading() {
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


export function hideTips() {
  return {
    type: HIDE_TIPS
  }
}


export function hideLoading() {
  return {
    type: HIDE_LOADING
  }
}



