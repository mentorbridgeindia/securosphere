import { Spinner } from "@atoms/Spinner";
import { useResendOTP, useVerifyOTP } from "@entities/Password";
import React, { useRef, useState } from "react";
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
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const { mutate: verifyOTP, isPending } = useVerifyOTP({
    onSuccess: () => {
      toast.success("OTP verified successfully!");
      updateOtp && updateOtp(otp.join(""));
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

  if (!email) {
    return null;
  }

  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otpRefs.current.length - 1) {
        otpRefs.current[index + 1]?.focus();
      }
      if (newOtp.join("").length === 6 && email) {
        verifyOTP({
          otp: newOtp.join(""),
          email: decodeURIComponent(email),
        });
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index]) {
      if (index > 0) {
        otpRefs.current[index - 1]?.focus();
      } else if (index < 3) {
        otpRefs.current[index + 3]?.focus();
      }
    }
  };

  const handleResendClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    resendOTP({
      email: decodeURIComponent(email),
      otp: "",
    });
  };

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

      <div className="d-flex justify-content-center gap-3">
        {otp.map((digit, index) => (
          <div
            className="col-2 d-flex justify-content-center gap-3"
            key={index}
          >
            <input
              type="text"
              className="form-control text-center rounded-lg otp-input"
              maxLength={1}
              ref={(el) => (otpRefs.current[index] = el)}
              value={digit}
              onChange={(e) => handleInputChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          </div>
        ))}
      </div>

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
