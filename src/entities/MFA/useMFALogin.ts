import { IMutationParams, MutationResponse } from "@/api/types";
import { useMutation } from "@tanstack/react-query";
import { IMFA } from "./MFA.types";

import { sendData } from "@/api/Post/sendData";
import {
  MFA_LOGIN_ENDPOINT,
  THIRD_PARTY_MFA_LOGIN_ENDPOINT
} from "@api/endpoints";

export const mfaLoginUser = async (data: IMFA) => {
  let url = MFA_LOGIN_ENDPOINT;
  if (sessionStorage.getItem("clientId") !== null) {
    url = THIRD_PARTY_MFA_LOGIN_ENDPOINT;
  }
  return await sendData<IMFA>(url, data);
};

export const useMFALogin = (params: IMutationParams = {}) =>
  useMutation<MutationResponse, Error, IMFA>({
    mutationFn: mfaLoginUser,
    ...params,
  });
