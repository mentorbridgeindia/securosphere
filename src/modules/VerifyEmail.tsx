import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";
import { Anchor } from "@/ui/atoms/Anchor";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

const VerifyEmail: React.FC = () => {
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otpRefs.current[index]?.value && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
    
  };


  return (
    <div className="position-relative vh-100 bg-light d-flex justify-content-center align-items-center">
      <div
        className="border rounded p-4 shadow-lg text-center w-100 position-relative bg-white"
        style={{ maxWidth: "600px", zIndex: 1 }}
      >
        <div className="d-flex justify-content-center mb-5">
          <img
            src="/maillogo.svg"
            alt="Email Verification"
            style={{ width: "150px" }}
          />
        </div>

        <div className="d-flex justify-content-center mb-4">
          <Alert
            variant="success"
            className="w-100"
            style={{ fontSize: "20px", maxWidth: "500px" }}
          >
            <FaCheckCircle style={{ marginRight: "15px", fontSize: "40px" }} />
            Your email has been successfully verified.
          </Alert>
        </div>

        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className="d-flex align-items-center">
            <FaInfoCircle style={{ fontSize: "40px", color: "#17a2b8" }} />
            <h6 className="text-info fw-bold ms-2 mb-0 text-start">
              Please check your inbox and click the verification link.
            </h6>
          </div>
        </div>

        <div className="mt-5 mb-2">
          <p style={{ fontSize: "22px" }} className="mb-4">
            Enter the OTP from your email.
          </p>
          <div className="row justify-content-center g-1">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="col-2" key={index}>
                <input
                  type="text"
                  className="form-control text-center"
                  maxLength={1}
                  style={{
                    height: "50px",
                    width: "60px",
                    fontSize: "26px",
                    borderRadius: "8px",
                    border: "1.5px solid #ccc",
                  }}
                  ref={(el) => (otpRefs.current[index] = el)}
                  onChange={(e) => handleInputChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-5 d-flex justify-content-center align-items-center gap-2">
          <p style={{ fontSize: "18px", marginBottom: "0" }}>
            Didn’t receive the email?
          </p>
          <Anchor
            href="/resend-verification-email"
            className="text-info fw-bold"
          >
            Resend Verification Email
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
