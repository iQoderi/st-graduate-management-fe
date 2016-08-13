/**
 * Created by qoder on 16-6-22.
 */
import {logoutWithNoTips} from './logout';
const getToken = function () {
  if (!localStorage) {
    alert('您的浏览器不支持localStorage，请更换浏览器或者更新您的浏览器');
    logoutWithNoTips();
    return false;
  }
  if (localStorage.getItem('neuqst.token')) {
    const token = localStorage.getItem('neuqst.token');
    return token;
  } else {
    alert('您还没有登录,请登录');
    logoutWithNoTips();
  }
};

export  default getToken;
