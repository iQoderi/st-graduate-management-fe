/**
 * Created by qoder on 16-6-27.
 */
function constructor(str1, str2) {
  var str1Arr = str1.split("");
  var str2Arr = str2.split("");
  var flag = true;
  str1Arr.forEach(function (ele) {
    if (str2Arr.indexOf(ele) >= 0) {
      str2Arr.splice(str2Arr.indexOf(ele), 1);
    }else{
      flag=false;
      return;
    }
  });

  return flag;
}


