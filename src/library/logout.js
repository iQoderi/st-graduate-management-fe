/**
 *
 * Created by qoder on 16-6-14.
 */
import  goto from '../library/changeHash';
function clearLocalStorage() {
  if (localStorage) {
    localStorage.removeItem('neuqst.token');
  } else {
    alert('你的浏览器部支持localStorage,建议更换浏览器或者更新您的浏览器');
  }
}

export function logout() {
  var flag = window.confirm('您确认要退出东北大学秦皇岛大学生就业择业平台?')
  if (flag) {
    goto('/auth/start');
    // clearLocalStorage();
  }
}

export function gotoReg() {
  var flag = window.confirm('您确认要退出东北大学秦皇岛大学生就业择业平台?')
  if (flag) {
    goto('/auth/register');
    // clearLocalStorage();
  }
}

export function gotoLogin() {
  var flag = window.confirm('您确认要退出东北大学秦皇岛大学生就业择业平台?')
  if (flag) {
    goto('/auth/login');
    // clearLocalStorage();
  }
}
