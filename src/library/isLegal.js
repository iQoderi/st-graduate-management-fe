/**
 * Created by qoder on 16-6-15.
 */
const isLegal=function (data) {
  var flag=data.some(function (each) {
    return each===''||each===undefined||each===null;
  });
  
  return !flag;
};


export  default isLegal;
