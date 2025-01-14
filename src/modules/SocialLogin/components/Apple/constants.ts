export const JS_SRC =
  "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
export const SCRIPT_ID = "apple-login";
export const _window = window as any;
export const client_id = process.env.REACT_APP_APPLE_CLIENT_ID;
export const scope = "name email";
export const state = "origin:web";
