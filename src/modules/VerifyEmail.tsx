import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { OTPForm } from "./OTPForm";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    if (!email) {
      toast.error("Link is invalid. Please check your email again.");
      navigate(
        "/error-page?error=Link is invalid. Please check your email again."
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
            src="/maillogo.svg"
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
              Verify Email
            </h5>
            <OTPForm handleSuccess={() => navigate("/login")} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default VerifyEmail;
