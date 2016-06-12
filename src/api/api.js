/**
 * Created by qoder on 16-6-10.
 */

function apiGenerator(path) {
  var targetUrl=apiHost+path;
  return targetUrl;
}

const api={
  login:apiGenerator('/users/login'),
  register:apiGenerator('/users/register')
};

export default api;
