/**
 * Created by qoder on 16-6-13.
 */

function apiMaker(path) {
  return apiHost + path;
}

const API = {
  reg: apiMaker('/users/register'),
  login: apiMaker('/users/login'),
  reSendEmail: apiMaker('/users/reSendEmail'),
  forgetPass: apiMaker('/users/forgetPass'),
  resetPass: apiMaker('/users/passNew'),
  BaseMsg: apiMaker('/users/BaseMsg'),
  my: apiMaker('/home/my'),
  changePass: apiMaker('/home/changePass'),
  admin: apiMaker('/home/admin'),
  changeAdminPass:apiMaker('/home/changeAdminPass')
};

export  default API;
