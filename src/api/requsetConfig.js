/**
 * Created by qoder on 16-6-13.
 */

function apiMaker(path) {
  return apiHost+path;
}

const  API={
  reg:apiMaker('/users/register'),
  login:apiMaker('/users/login'),
  reSendEmail:apiMaker('/users/reSendEmail')
};

export  default API;
