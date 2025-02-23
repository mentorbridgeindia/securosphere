import { Spinner } from "@atoms/Spinner";
import { useResendOTP, useVerifyOTP } from "@entities/Password";
import { OTPInput } from "@molecules/OTPInput";
import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./OTPForm.scss";

export const OTPForm = ({
  handleSuccess,
  updateOtp,
}: {
  handleSuccess: () => void;
  updateOtp?: (otp: string) => void;
}) => {
  const [searchParams] = useSearchParams();
  const [otp, setOtp] = useState<string>("");
  const email = searchParams.get("email");
  const defaultOtp = searchParams.get("otp");

  const { mutate: verifyOTP, isPending } = useVerifyOTP({
    onSuccess: () => {
      toast.success("OTP verified successfully!");
      handleSuccess();
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Error verifying OTP.");
    },
  });

  const { mutate: resendOTP, isPending: isResendingOTP } = useResendOTP({
    onSuccess: () => {
      toast.success("OTP resent successfully!");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Error resending OTP.");
    },
  });

  const handleResendClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (email) {
      resendOTP({
        email: decodeURIComponent(email),
        otp: "",
      });
    }
  };

  const handleOtpComplete = (otp: string) => {
    if (otp && otp.length === 6 && email) {
      verifyOTP({
        otp,
        email: decodeURIComponent(email),
      });
    }
  };

  useEffect(() => {
    if (defaultOtp) {
      setOtp(defaultOtp);
    }
  }, [defaultOtp]);

  if (!email) {
    return null;
  }

  return (
    <div className="otp-form">
      <div className="d-flex align-items-center justify-content-center mb-4">
        <div className="d-flex align-items-center">
          <FaInfoCircle className="text-info" />
          <h6 className="text-info fw-bold ms-2 mb-0 text-start">
            Enter the code sent to your email{" "}
            {email && decodeURIComponent(email)}
          </h6>
        </div>
      </div>

      <OTPInput onComplete={handleOtpComplete} defaultOtp={otp} />

      <div className="text-center d-flex justify-content-center align-items-center gap-2">
        <p className="text-lg mb-0">Didn’t receive the email?</p>
        <a
          href="/reset-password"
          className="text-info fw-bold"
          onClick={handleResendClick}
        >
          Resend Verification Email
        </a>
      </div>
      <Spinner isLoading={isPending || isResendingOTP} />
    </div>
  );
};
