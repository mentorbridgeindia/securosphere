import { IMutationParams, MutationResponse } from "@/api/types";
import { useMutation } from "@tanstack/react-query";
import { CHANGE_PASSWORD_ENDPOINT, sendData } from "../../api";
import { IChangePasswordData } from "./Password.types";

const changePassword = async (data: IChangePasswordData) => {
  const response = await sendData(CHANGE_PASSWORD_ENDPOINT, data);
  return response;
};

export const useChangePassword = (params: IMutationParams = {}) =>
  useMutation<MutationResponse, Error, IChangePasswordData>({
    mutationFn: changePassword,
    ...params,
  });
