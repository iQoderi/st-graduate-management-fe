/**
 * Created by qoder on 16/10/15.
 */
function test(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  if (array.length < 2) {
    return;
  }

  if (array.length == 2) {
    return array[1] - array[0];
  }
  var leftFlag = array[0];
  var rightFlag = array[1];
  var ans = rightFlag - leftFlag;
  for (var i = 1; i < array.length; i++) {
    leftFlag = array[i - 1];
    rightFlag = array[i];
    if (rightFlag - leftFlag > ans) {
      ans = rightFlag - leftFlag;
    }
  }

  return ans;
}


function mergeArray(array1, array2) {
  var flag1 = array1.length - 1;
  var flag2 = array2.length - 1;
  var arr1Length = flag1;
  var arr2Length = flag2;
  var res = [];
  while (flag1 >= 0 && flag2 >= 0) {
    if (array1[arr1Length - flag1] > array2[arr2Length - flag2]) {
      res[flag1 + flag2 + 1] = array1[arr1Length - flag1];
      flag1--;
    } else {
      res[flag1 + flag2 + 1] = array2[arr2Length - flag2];
      flag2--;
    }
  }

  while (flag1 >= 0) {
    res[flag1] = array1[arr1Length - flag1];
    flag1--;
  }

  while (flag2 >= 0) {
    res[flag2] = array2[arr2Length - flag2];
    flag2--;
  }

  return res;
}


function main(array, k) {
  Array.prototype.unshift.apply(array, array.slice(array.length - k));
  array.splice(array.length - k);
  return array;
}

console.log(main([1, 2, 3, 4], 3));
