import { IMutationParams, MutationResponse } from "@/api/types";
import { useMutation } from "@tanstack/react-query";
import { RESEND_OTP_ENDPOINT, VERIFY_OTP_ENDPOINT, sendData } from "../../api";
import { IResendOTPMutation, IVerifyOTPMutation } from "./Password.types";

const verifyOTP = async (data: IVerifyOTPMutation) => {
  const response = await sendData(VERIFY_OTP_ENDPOINT, data);
  return response;
};

const resendOTP = async (data: IResendOTPMutation) => {
  const response = await sendData(RESEND_OTP_ENDPOINT, data);
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
