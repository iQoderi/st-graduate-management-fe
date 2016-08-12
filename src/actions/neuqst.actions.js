/**
 * Created by qoder on 16/6/11.
 */
import * as  ACTIONS from './consts';
import 'whatwg-fetch';
import API from '../api/requsetConfig';
import getToken from '../library/getToken';
import 'whatwg-fetch';
window.timer = null;

export function showTips(tip) {
  return {
    type: ACTIONS.SHOW_TIPS,
    tip
  }
}

export function hideTips() {
  return {
    type: ACTIONS.HIDE_TIPS
  }
}

export function ayncCloseTips(tip, time = 1500) {
  clearTimeout(timer);
  return (dispatch)=> {
    dispatch(showTips(tip));
    timer = setTimeout(()=> {
      dispatch(hideTips());
    }, time);
  }
}

export function showLoading() {
  return {
    type: ACTIONS.SHOW_LOADING
  }
}


export function hideLoading() {
  return {
    type: ACTIONS.HIDE_LOADING
  }
}


export function showDropMenu() {
  return {
    type: ACTIONS.SHOW_DROPMENU
  }
}


export function hideDropMenu() {
  return {
    type: ACTIONS.HIDE_DROPMENU
  }
}

export function showChanPass() {
  return {
    type: ACTIONS.SHOW_CHANPASS
  }
}


export function hideChanPass() {
  return {
    type: ACTIONS.HIDE_CHANPASS
  }
}


export function changePageSucc(page = [], curPage = 1, count = 0) {
  return {
    type: ACTIONS.CHANGE_PAGE_SUCCESS,
    page,
    curPage,
    count
  }
}


export function showConfirm(header, body, id) {
  return {
    type: ACTIONS.SHOW_CONFIRM,
    show: "block",
    header,
    body,
    id
  }
}


export function hideConfirm() {
  return {
    type: ACTIONS.HIDE_CONFIRM,
    show: 'none'
  }
}

export function showEditAdmin(data) {
  return {
    type: ACTIONS.SHOW_EDIT_ADMIN,
    show: true,
    data
  }
}


export function hideEditAdmin() {
  return {
    type: ACTIONS.HIDE_EDIT_ADMIN,
    show: false
  }
}

export function showChangeAdminPass(id) {
  return {
    type: ACTIONS.SHOW_CHANGE_ADMIN_PASS,
    show: true,
    id
  }
}

export function hideChangeAdminPass() {
  return {
    type: ACTIONS.HIDE_CHANGE_ADMIN_PASS,
    show: false
  }
}

export function getMyMess(users) {
  return {
    type: ACTIONS.GET_MY_MESS,
    users
  }
}


export function editMyMess(show) {
  return {
    type: ACTIONS.EDIT_MY_MESS,
    show
  }
}

/**
 * 异步action开始
 * @returns {{type}}
 */
export function showSearchStu() {
  return {
    type: ACTIONS.SHOW_SEARCH_STU
  }
}


export function hideSearchStu() {
  return {
    type: ACTIONS.HIDE_SEARCH_STU
  }
}

export function searchStuSucc(pages, count, cur, body) {
  return {
    type: ACTIONS.SEARCH_STU_SUCC,
    pages,
    count,
    cur,
    body
  }
}

export function searchStuFail() {
  return {
    type: ACTIONS.SEACH_STU_FAIL
  }
}

/**
 * 搜索毕业生
 * @param start
 * @param per
 * @param body
 * @returns {function(*)}
 */

export function searchStu(start = 1, per = 15, body) {
  return (dispatch)=> {
    dispatch(showLoading());
    const token = getToken();
    return fetch(`${API.searchGraduate}?start=${start}&&pageSize=${per}`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Token": token
      },
      body: JSON.stringify(body)
    }).then((res)=> {
      dispatch(hideLoading());
      return res.json();
    }).then((json)=> {
      if (json.code === 10000) {
        if (json.data.count === 0) {
          dispatch(ayncCloseTips('搜索结果为空'));
        } else {
          dispatch(searchStuSucc(json.data.graduate, json.data.count, start, body));
          dispatch(showSearchStu());
        }
      } else {
        dispatch(ayncCloseTips(json.data.msg));
        dispatch(searchStuFail());
      }
    })
  }
}

/**
 * 导出excel
 * @param body
 * @returns {function(*)}
 */
export function exportStu(body) {
  return (dispatch)=> {
    dispatch(showLoading());
    const token = getToken();
    return fetch(API.testExcel, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Token": token
      },
      body: JSON.stringify(body)
    })
      .then((res)=> {
        dispatch(hideLoading());
        return res.blob();
      }).then((blob)=> {
        var a = document.createElement('a');
        var url = window.URL.createObjectURL(blob);
        var filename = `东北大学秦皇岛分校大学生毕业生就业择业表.xlsx`;
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      })
  }
}


export function clearAll() {
  return (dispatch)=> {
    dispatch(hideLoading());
    dispatch(hideTips());
    dispatch(hideSearchStu());
    dispatch(hideDropMenu());
    dispatch(hideChangeAdminPass());
    dispatch(hideConfirm());
    dispatch(hideEditAdmin());
    dispatch(hideChanPass());
  }
}


