export const MICROSOFT_URL = "https://login.microsoftonline.com";
export const MICROSOFT_API_URL = "https://graph.microsoft.com";
export const state = "_microsoft";
export const scope = "profile openid email";
export const response_type = "code";
export const response_mode = "query";
export const code_challenge =
  "19cfc47c216dacba8ca23eeee817603e2ba34fe0976378662ba31688ed302fa9";
export const code_challenge_method = "plain";
export const prompt = "select_account";
export const isOnlyGetCode = false;
export const isOnlyGetToken = false;
export const tenant = "common";
export const client_id = process.env.REACT_APP_MICROSOFT_CLIENT_ID;
