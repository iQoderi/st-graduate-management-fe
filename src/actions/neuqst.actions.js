/**
 * Created by qoder on 16/6/11.
 */
import {
  SHOW_LOADING, HIDE_LOADING,
  SHOW_TIPS, HIDE_TIPS,
  SHOW_CHANPASS, HIDE_CHANPASS,
  HIDE_DROPMENU, SHOW_DROPMENU
} from './consts';

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


export function showLoading() {
  return {
    type: SHOW_LOADING
  }
}


export function hideLoading() {
  return {
    type: HIDE_LOADING
  }
}


export function showDropMenu() {
  return {
    type: SHOW_DROPMENU
  }
}


export function hideDropMenu() {
  return {
    type: HIDE_DROPMENU
  }
}

export function showChanPass() {
  return {
    type: SHOW_CHANPASS
  }
}


export function hideChanPass() {
  return {
    type: HIDE_CHANPASS
  }
}


