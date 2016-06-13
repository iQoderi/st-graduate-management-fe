/**
 *
 * Created by qoder on 16-6-13.
 */
import 'whatwg-fetch';
export function POST(path,data) {
  var req=fetch(path,{
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
  });
  
  return req;
}

export function GET(path) {
  var req=fetch(path);
  return req;
}
