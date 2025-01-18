export const SDK_URL: string = "https://connect.facebook.net/en_EN/sdk.js";
export const SCRIPT_ID: string = "facebook-jssdk";
export const _window = window as any;
export const scope = "email,public_profile";
export const version = "v2.7";
export const language = "en_EN";
export const auth_type = "";
export const fieldsProfile =
  "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender";
export const response_type = "code";
export const return_scopes = true;
export const xfbml = true;
export const cookie = true;
export const isOnlyGetToken = false;
export const appId = process.env.REACT_APP_FACEBOOK_CLIENT_ID;
export const state = true;
