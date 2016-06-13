/**
 * Created by qoder on 16-6-13.
 */
function goto(path,time=0) {
    setTimeout(function () {
      window.location.hash='#'+path;
    },time);
}

export  default goto;
