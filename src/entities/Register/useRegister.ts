import { IMutationParams, MutationResponse } from "@/api/types";
import {
  REGISTER_ENDPOINT,
  REGISTER_SOCIAL_ENDPOINT,
  THIRD_PARTY_REGISTER_ENDPOINT,
} from "@api/endpoints";
import { sendData } from "@api/Post/sendData";
import { useMutation } from "@tanstack/react-query";
import { IRegisterMutation } from "./Register.types";

const registerUser = async (data: IRegisterMutation) => {
  let url = REGISTER_ENDPOINT;
  if (sessionStorage.getItem("clientId") !== null) {
    url = THIRD_PARTY_REGISTER_ENDPOINT;
  }
  return await sendData<IRegisterMutation>(url, data);
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
