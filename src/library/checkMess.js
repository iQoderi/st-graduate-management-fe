/**
 * Created by qoder on 16/6/16.
 */
import 'whatwg-fetch';
import API from '../api/requsetConfig';
import goto from './changeHash';
const token = localStorage.getItem('neuqst.token');
function checkMess(loading, loaded) {
  let my = {};
  if (token) {
    loading();
    fetch(API.my, {
      headers: {
        'Token': token
      }
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        loaded();
        my = json;
      });
    return my;
  } else {
    alert('您还未登录,登录');
    goto('/auth/login');
  }
}

export  default checkMess;
