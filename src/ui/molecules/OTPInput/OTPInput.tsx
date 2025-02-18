import { useEffect, useRef, useState } from "react";

export const OTPInput = ({
  onComplete,
  defaultOtp,
}: {
  onComplete: (otp: string) => void;
  defaultOtp?: string;
}) => {
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

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
      if (newOtp.join("").length === 6) {
        onComplete(newOtp.join(""));
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

  useEffect(() => {
    if (defaultOtp) {
      setOtp(defaultOtp.split(""));
    }
  }, [defaultOtp]);

  return (
    <div className="d-flex justify-content-center gap-1">
      {otp.map((digit, index) => (
        <div className="col-2 d-flex justify-content-center ms-1" key={index}>
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
  );
};
