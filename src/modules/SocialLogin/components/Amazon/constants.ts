export const JS_SRC = "https://assets.loginwithamazon.com/sdk/na/login1.js";
export const SCRIPT_ID = "amazon-login";
export const _window = window as any;
export const AMAZON_PROFILE_URL = "https://api.amazon.com/user/profile";
export const state = "";
export const scope = "profile";
export const response_type = "token";
export const onlyGetToken = false;
export const scope_data = {
  profile: { essential: true },
};
export const client_id = process.env.REACT_APP_AMAZON_CLIENT_ID;
