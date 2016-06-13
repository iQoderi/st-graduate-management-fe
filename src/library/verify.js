/**
 * Created by qoder on 16-6-13.
 */
const emailRgx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g;
const passRgx=/^(\w){6,16}$/g;
const phoneRgx=/^1[1-9][0-9]\d{8}$/;
export function verifyEmail(email){
  return email.match(emailRgx);
}

export function verifyPass(pass) {
  return pass.match(passRgx);
}

export function verifyPhone(phone) {
  return phone.match(phoneRgx);
}


