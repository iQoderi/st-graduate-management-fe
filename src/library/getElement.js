/**
 * Created by qoder on 16-6-20.
 */
const _$ = function (id) {
  if (id) {
    return document.getElementById(id);
  } else {
    return false;
  }
};

export  default _$;
