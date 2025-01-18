import { sendData } from "@/api/Post/sendData";
import { LOGIN_ENDPOINT, LOGIN_SOCIAL_ENDPOINT } from "@api/endpoints";
import { ILoginMutation } from "./ILogin.types";

export const loginUser = async (data: ILoginMutation) => {
  return await sendData<ILoginMutation>(LOGIN_ENDPOINT, data);
};

export const loginSocialUser = async (data: ILoginMutation) => {
  return await sendData<ILoginMutation>(LOGIN_SOCIAL_ENDPOINT, data);
};
