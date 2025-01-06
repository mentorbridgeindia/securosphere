import { sendData } from "@/api/Post/sendData";
import { IRegisterMutation } from "./IRegister.types";
import { REGISTER_ENDPOINT } from "@api/endpoints";

export const registerUser = async (data: IRegisterMutation) => {
  return await sendData<IRegisterMutation>(REGISTER_ENDPOINT, data);
};
