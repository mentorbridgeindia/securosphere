import { IMutationParams, MutationResponse } from "@/api/types";
import { useMutation } from "@tanstack/react-query";
import {
  RESET_PASSWORD_ENDPOINT,
  THIRD_PARTY_RESET_PASSWORD_ENDPOINT,
  sendData,
} from "../../api";
import { IResetPasswordMutation } from "./Password.types";

const resetPassword = async (data: IResetPasswordMutation) => {
  const url = sessionStorage.getItem("clientId")
    ? THIRD_PARTY_RESET_PASSWORD_ENDPOINT
    : RESET_PASSWORD_ENDPOINT;
  const response = await sendData(url, data);
  return response;
};

export const useResetPassword = (params: IMutationParams = {}) =>
  useMutation<MutationResponse, Error, IResetPasswordMutation>({
    mutationFn: resetPassword,
    ...params,
  });
