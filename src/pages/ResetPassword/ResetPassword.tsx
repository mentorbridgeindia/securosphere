import resetpasswordimg from "@assets/resetpassword.svg";
import { OTPForm } from "@modules/OTPForm/OTPForm";
import { ResetPasswordForm } from "@modules/ResetPasswordForm";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export const ResetPassword = () => {
  const [showResetPasswordForm, setShowResetPasswordForm] = useState(true);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    if (!email) {
      toast.error("Link is invalid. Please check the link you received.");
      navigate(
        "/error-page?error=Link is invalid. Please check the link you received."
      );
    }
  }, [email, navigate]);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Row className="w-100 center">
        <Col
          lg={4}
          className="d-none d-lg-flex justify-content-center align-items-center"
          style={{ paddingRight: "60px" }}
        >
          <img
            src={resetpasswordimg}
            alt="Forgot Password"
            className="img-fluid"
          />
        </Col>
        <Col
          xs={12}
          md={10}
          lg={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Card className="p-4 shadow rounded w-100 d-flex flex-column gap-3">
            <h5 className="text-center fw-bold mb-4 text-uppercase text-primary">
              Reset Password
            </h5>
            {showResetPasswordForm && otp ? (
              <ResetPasswordForm otp={otp} />
            ) : (
              <OTPForm
                handleSuccess={() => setShowResetPasswordForm(true)}
                updateOtp={(otp) => setOtp(otp)}
              />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
