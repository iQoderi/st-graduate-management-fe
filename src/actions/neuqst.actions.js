/**
 * Created by qoder on 16/6/11.
 */
import * as  ACTIONS from './consts';
import 'whatwg-fetch';
import API from '../api/requsetConfig';
import getToken from '../library/getToken';
import goto from '../library/changeHash';

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
    const token = getToken();
    var a = document.createElement('a');
    var url =`${API.testExcel}?Token=${token}`;
    for(var item in body){
      if(body[item]){
        url+=`&${item}=${body[item]}`;
      }
    }
    a.href = url;
    a.target='_blank';
    a.click();
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
    const token = getToken();
    dispatch(showLoading());
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
      if (json.code === 10000) {
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

/**
 * 手机官网菜单
 * @returns {{type}}
 */
export function showWPhoneMenu() {
  return {
    type: ACTIONS.SHOW_WPHONE_MENU
  }
}

export function hideWPhoneMenu() {
  return {
    type: ACTIONS.HIDE_WPHONE_MENU
  }
}

/**
 * 获取学生列表
 * @param page
 * @param size
 * @param count
 * @param students
 * @param academy
 * @param major
 * @param isBlock
 * @returns {{type, page: *, size: *, count: *, students: *, academy: string, major: string, isBlock: string}}
 */
export function getStudentsSucc(page,size,count,students,academy='全部',major='',stuClass='',isBlock='全部') {
  return{
    type:ACTIONS.GET_STUDENTS_SUCCESS,
    page,
    size,
    count,
    students,
    academy,
    major,
    stuClass,
    isBlock
  }
}


export function getStudentsFail() {
  return{
    type:ACTIONS.GET_STUDENTS_FAIL
  }
}

export function getStudents(page,size,body) {
  return (dispatch)=>{
    var url=`${API.getStudents}?start=${page}&pageSize=${size}`;
    if(body.isBlock==='正常'){body.isBlock=false;}
    if(body.isBlock==='冻结'){body.isBlock=true;}
    for (var item in body){
      if(body[item]!==""&&body[item]!=='全部'){
        url+=`&${item}=${body[item]}`
      }
    }
    const token=getToken();
    dispatch(showLoading());
    return fetch(url,{
      method:"GET",
      headers:{
        "Accept":"application/json",
        "Content-Type":'application/json',
        "token":token
      }
    }).then((res)=>{return res.json()}).then((json)=>{
      dispatch(hideLoading());
      if(json.code===10000){
        const {count,pages}=json.data;
        const {academy,major,isBlock}=body;
        dispatch(getStudentsSucc(page,size,count,pages,academy,major,body.class,isBlock));
      }else{
        dispatch(ayncCloseTips(json.data.msg));
        dispatch(getStudentsFail());
      }
    })
  }
}


export function blockAccount(userId,type){
  return (dispatch,getState)=>{
    dispatch(showLoading());
    const token=getToken();
    const body={userId,type};
    return fetch(API.blockAccount,{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'token':token
      },
      body:JSON.stringify(body)
    }).then((res)=>{return res.json()}).then((json)=>{
      if(json.code===10000){
        const {page,size,academy,major,isBlock}=getState().students;
        const payload={academy,major,class:getState().students.class,isBlock};
        dispatch(getStudents(page,size,payload));
        dispatch(hideLoading());
        dispatch(ayncCloseTips("操作成功"));
      }else{
        dispatch(hideLoading());
        dispatch(ayncCloseTips(json.data.msg));
      }
    })
  }
}
