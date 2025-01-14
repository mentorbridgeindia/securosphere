import { IMutationParams, MutationResponse } from "@/api/types";
import { REGISTER_ENDPOINT, REGISTER_SOCIAL_ENDPOINT } from "@api/endpoints";
import { sendData } from "@api/Post/sendData";
import { useMutation } from "@tanstack/react-query";
import { IRegisterMutation } from "./Register.types";

const registerUser = async (data: IRegisterMutation) => {
  return await sendData<IRegisterMutation>(REGISTER_ENDPOINT, data);
};

export const useRegister = (params: IMutationParams = {}) =>
  useMutation<MutationResponse, Error, IRegisterMutation>({
    mutationFn: registerUser,
    ...params,
  });

const registerSocialUser = async (data: IRegisterMutation) => {
  return await sendData<IRegisterMutation>(REGISTER_SOCIAL_ENDPOINT, data);
};

export const useSocialRegister = (params: IMutationParams = {}) =>
  useMutation<MutationResponse, Error, IRegisterMutation>({
    mutationFn: registerSocialUser,
    ...params,
  });
