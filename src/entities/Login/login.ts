import { sendData } from "@/api/Post/sendData";
import { ILoginMutation } from "./ILogin.types";
import { LOGIN_ENDPOINT } from "@api/endpoints";

export const loginUser = async (data: ILoginMutation) => {
  return await sendData<ILoginMutation>(LOGIN_ENDPOINT, data);
};