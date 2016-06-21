/**
 * Created by qoder on 16-6-22.
 */
const getToken=function () {
  if(localStorage.getItem('neuqst.token')){
    const  token=localStorage.getItem('neuqst.token');
    return token;
  }else{
    alert('您的浏览器不支持localStorage，请更换浏览器或者更新您的浏览器');
  }
};

export  default getToken;
