import { IMutationParams, MutationResponse } from "@/api/types";
import { useMutation } from "@tanstack/react-query";
import { FORGOT_PASSWORD_ENDPOINT, sendData } from "../../api";
import { IForgotPasswordMutation } from "./Password.types";

const forgotPassword = async (data: IForgotPasswordMutation) => {
  const response = await sendData(FORGOT_PASSWORD_ENDPOINT, data);
  return response;
};

export const useForgotPassword = (params: IMutationParams = {}) =>
  useMutation<MutationResponse, Error, IForgotPasswordMutation>({
    mutationFn: forgotPassword,
    ...params,
  });
