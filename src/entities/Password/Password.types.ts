export interface IForgotPasswordMutation {
  email: string;
}

export interface IForgotPasswordData {
  email: string;
}

export interface IVerifyOTPMutation {
  otp: string;
  email: string;
}

export interface IResendOTPMutation {
  email: string;
  otp: string;
}

export interface IResetPasswordMutation {
  otp: string;
  email: string;
  newPassword: string;
}
