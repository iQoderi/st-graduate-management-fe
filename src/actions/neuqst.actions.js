/**
 * Created by qoder on 16/6/11.
 */
import {
  SHOW_LOADING, HIDE_LOADING,
  SHOW_TIPS, HIDE_TIPS,
  SHOW_CHANPASS, HIDE_CHANPASS,
  HIDE_DROPMENU, SHOW_DROPMENU,
  CHANGE_PAGE, CHANGE_PAGE_SUCCESS,
  SHOW_CONFIRM, HIDE_CONFIRM,
  SHOW_EDIT_ADMIN, HIDE_EDIT_ADMIN,
  SHOW_CHANGE_ADMIN_PASS, HIDE_CHANGE_ADMIN_PASS
} from './consts';
import 'whatwg-fetch';
import API from '../api/requsetConfig';

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


export function changePage(index = 1, size = 10) {
  return {
    type: CHANGE_PAGE,
    get: fetch(API.admin + '?start=' + index + '&pageSize=' + size)
  }
}

export function changePageSucc(page = [], curPage = 1, count = 0) {
  return {
    type: CHANGE_PAGE_SUCCESS,
    page,
    curPage,
    count
  }
}


export function showConfirm(header, body, id) {
  return {
    type: SHOW_CONFIRM,
    show: "block",
    header,
    body,
    id
  }
}


export function hideConfirm() {
  return {
    type: HIDE_CONFIRM,
    show: 'none'
  }
}

export function showEditAdmin(data) {
  return {
    type: SHOW_EDIT_ADMIN,
    show: true,
    data
  }
}


export function hideEditAdmin() {
  return {
    type: HIDE_EDIT_ADMIN,
    show: false
  }
}

export function showChangeAdminPass(id) {
  return {
    type:SHOW_CHANGE_ADMIN_PASS,
    show:true,
    id
  }
}

export function hideChangeAdminPass() {
  return{
    type:HIDE_CHANGE_ADMIN_PASS,
    show:false
  }
}
