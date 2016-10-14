/**
 * Created by qoder on 16/6/11.
 */
import * as  ACTIONS from './consts';
import 'whatwg-fetch';
import API from '../api/requsetConfig';
import getToken from '../library/getToken';
import goto from '../library/changeHash';
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


export function showExcelModal() {
  return {
    type: ACTIONS.SHOW_EXCELTPL_MODAl,
  }
}


export function closeExcelModal() {
  return {
    type: ACTIONS.CLOSE_EXCELTPL_MODAl
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

/**
 * 清除action
 * @returns {function(*)}
 */
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

/**
 * 上传excel
 * @param excelFile
 * @returns {function(*)}
 */
export function uploadExcel(excelFile) {
  return (dispatch)=> {
    var data = new FormData();
    data.append('excel', excelFile);
    dispatch(showLoading());
    const token = getToken();
    return fetch(API.uploadExcel, {
      method: 'POST',
      headers: {
        "Token": token
      },
      body: data
    }).then((res)=> {
      dispatch(hideLoading());
      return res.json();
    }).then((json)=> {
      if (json.code === 10000) {
        dispatch(ayncCloseTips('上传excel成功'));
      } else {
        dispatch(ayncCloseTips(json.data.msg));
      }
    })
  }
}

/**
 * 删除毕业生
 * @param id
 * @returns {function(*)}
 */
export function deleteGraduate(id) {
  return (dispatch, getStore)=> {
    dispatch(showLoading());
    const token = getToken();
    const body = {id: id};
    return fetch(API.adminAddGraduate, {
      method: 'DELETE',
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
        const data = getStore().graduateList;
        if (data.pages.length <= 1) {
          dispatch(searchStu(data.cur - 1, 15, data.body));
        } else {
          dispatch(searchStu(data.cur, 15, data.body));
        }
        dispatch(ayncCloseTips('删除成功'));
      } else {
        dispatch(ayncCloseTips(json.data.msg));
      }
    })
  }
}

/**
 * 获取个人信息
 * @returns {function(*)}
 */
export function getMyMsg() {
  return (dispatch)=> {
    dispatch(showLoading());
    const token = getToken();
    return fetch(API.my, {
      headers: {
        "Token": token
      }
    }).then((res)=> {
      dispatch(hideLoading());
      return res.json();
    }).then((json)=> {
      if (json.code === 10000) {
        dispatch(getMyMess(json.data.users));
      } else {
        dispatch(ayncCloseTips(json.data.msg));
      }
    })
  }
}

/**
 * 获取自己的毕业信息
 * @param graduate
 * @returns {{type, graduate: *}}
 */
export function getGraduateSucc(graduate) {
  return {
    type: ACTIONS.GET_GRADUATE_SUCC,
    graduate
  }
}


export function getGraduateFail() {
  return {
    type: ACTIONS.GET_GRADUATE_FAIL
  }
}

export function getGraduate(isJump) {
  return (dispatch)=> {
    const token = getToken();
    return fetch(API.graduate, {
      headers: {
        'token': token
      }
    }).then((res)=> {
      return res.json();
    }).then((json)=> {
      if (json.code === 0) {
        dispatch(getGraduateSucc(json.data.graduate));
        if (isJump) {
          goto('/moreInfo');
          dispatch(hideDropMenu());
        }
      } else {
        dispatch(ayncCloseTips(json.data.msg));
        dispatch(getGraduateFail());
      }
    })
  }
}

/**
 * 添加毕业生信息
 * @param graduate
 * @returns {function(*)}
 */
export function addGraduateMsg(graduate) {
  return (dispatch)=> {
    const token = getToken();
    dispatch(showLoading());
    return fetch(API.graduate, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'token': token
      },
      body: JSON.stringify(graduate)
    }).then((res)=> {
      dispatch(hideLoading());
      return res.json();
    }).then((json)=> {
      if (json.code === 10000) {
        dispatch(ayncCloseTips('完善毕业生信息完成'));
        dispatch(getGraduate());
      } else {
        dispatch(ayncCloseTips(json.data.msg));
      }
    })
  }
}

/**
 * 更新
 * @param graduate
 * @returns {function(*)}
 */
export function updateGraduate(graduate) {
  return (dispatch)=> {
    const token = getToken();
    dispatch(showLoading());
    return fetch(API.graduate, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'token': token
      },
      body: JSON.stringify(graduate)
    }).then((res)=> {
      dispatch(hideLoading());
      return res.json();
    }).then((json)=> {
      if (json.code === 10000) {
        dispatch(ayncCloseTips('更新毕业生信息完成'));
        dispatch(getGraduate());
      } else {
        dispatch(ayncCloseTips(json.data.msg));
      }
    })
  }
}

/**
 * 手机菜单
 * @returns {{type}}
 */
export function showPhoneMenu() {
  return {
    type: ACTIONS.SHOW_PHONE_MENU
  }
}

export function hidePhoneMenu() {
  return {
    type: ACTIONS.HIDE_PHONE_MENU
  }
}

