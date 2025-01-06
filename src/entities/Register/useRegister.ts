import { IMutationParams, MutationResponse } from "@/api/types";
import { REGISTER_ENDPOINT } from "@api/endpoints";
import { sendData } from "@api/Post/sendData";
import { useMutation } from "@tanstack/react-query";
import { IRegisterMutation } from "./IRegister.types";

const registerUser = async (data: IRegisterMutation) => {
  return await sendData<IRegisterMutation>(REGISTER_ENDPOINT, data);
};

export const useRegister = (params: IMutationParams = {}) =>
  useMutation<MutationResponse, Error, IRegisterMutation>({
    mutationFn: registerUser,
    ...params,
  });
