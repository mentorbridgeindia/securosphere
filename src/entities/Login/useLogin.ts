import { IMutationParams, MutationResponse } from "@/api/types";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "./login";
import { ILoginMutation } from "./ILogin.types";

export const useLogin = (params: IMutationParams = {}) =>
  useMutation<MutationResponse, Error, ILoginMutation>({
    mutationFn: loginUser,
    ...params,
  });