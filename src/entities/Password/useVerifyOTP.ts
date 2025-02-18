import { IMutationParams, MutationResponse } from "@/api/types";
import { useMutation } from "@tanstack/react-query";
import {
  RESEND_OTP_ENDPOINT,
  THIRD_PARTY_RESEND_OTP_ENDPOINT,
  THIRD_PARTY_VERIFY_OTP_ENDPOINT,
  VERIFY_OTP_ENDPOINT,
  sendData,
} from "../../api";
import { IResendOTPMutation, IVerifyOTPMutation } from "./Password.types";

const verifyOTP = async (data: IVerifyOTPMutation) => {
  const url = sessionStorage.getItem("clientId")
    ? THIRD_PARTY_VERIFY_OTP_ENDPOINT
    : VERIFY_OTP_ENDPOINT;
  const response = await sendData(url, data);
  return response;
};

const resendOTP = async (data: IResendOTPMutation) => {
  const url = sessionStorage.getItem("clientId")
    ? THIRD_PARTY_RESEND_OTP_ENDPOINT
    : RESEND_OTP_ENDPOINT;
  const response = await sendData(url, data);
  return response;
};

export const useVerifyOTP = (params: IMutationParams = {}) =>
  useMutation<MutationResponse, Error, IVerifyOTPMutation>({
    mutationFn: verifyOTP,
    ...params,
  });

export const useResendOTP = (params: IMutationParams = {}) =>
  useMutation<MutationResponse, Error, IResendOTPMutation>({
    mutationFn: resendOTP,
    ...params,
  });
