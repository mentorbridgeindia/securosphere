import { sendData } from "@/api/Post/sendData";
import {
  LOGIN_ENDPOINT,
  LOGIN_SOCIAL_ENDPOINT,
  THIRD_PARTY_LOGIN_ENDPOINT,
} from "@api/endpoints";
import { ILoginMutation } from "./ILogin.types";

export const loginUser = async (data: ILoginMutation) => {
  let url = LOGIN_ENDPOINT;
  if (sessionStorage.getItem("clientId") !== null) {
    url = THIRD_PARTY_LOGIN_ENDPOINT;
  }
  return await sendData<ILoginMutation>(url, data);
};

export const loginSocialUser = async (data: ILoginMutation) => {
  return await sendData<ILoginMutation>(LOGIN_SOCIAL_ENDPOINT, data);
};
