import { IMutationParams, MutationResponse } from "@/api/types";
import { useMutation } from "@tanstack/react-query";
import { RESET_PASSWORD_ENDPOINT, sendData } from "../../api";
import { IResetPasswordMutation } from "./Password.types";

const resetPassword = async (data: IResetPasswordMutation) => {
  const response = await sendData(RESET_PASSWORD_ENDPOINT, data);
  return response;
};

export const useResetPassword = (params: IMutationParams = {}) =>
  useMutation<MutationResponse, Error, IResetPasswordMutation>({
    mutationFn: resetPassword,
    ...params,
  });
