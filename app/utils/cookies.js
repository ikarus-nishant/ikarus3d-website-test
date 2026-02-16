import { createCookie } from "@remix-run/node";

// This is the cookie name that middleware is setting on frontend whenever a user enters data in Get-In-Touch form
export const contactUsRegistered = createCookie("userSession");

export function readCookie(name, cookies) {
  if(!cookies) return null;

  var nameEQ = name + "=";
  var ca = cookies.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

export function parseUserSessionCookie(cookie){
  if(!cookie) return {};

  // cookie data is percent encoded.
  // %cent encoding = https://en.wikipedia.org/wiki/Percent-encoding, and
  // https://stackoverflow.com/questions/4911820/percent-encoding-javascript
  cookie = JSON.parse(decodeURIComponent(cookie));

  let data = {};
  for(let c of cookie){
    data = parseJwt(c);
    if(!!data["getInTouch"]){
      break;
    }
  }

  return data;
}

// only to be used server side
function parseJwt (token) {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

//only to be used client side
function parseJwtClient (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}