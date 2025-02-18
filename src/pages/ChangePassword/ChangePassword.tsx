import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ChangePasswordForm } from "@modules/ChangePassword";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

export const ChangePassword = () => {
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
          xs={12}
          md={10}
          lg={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Card className="p-4 shadow rounded w-100 d-flex flex-column gap-3">
            <h5 className="text-center fw-bold mb-4 text-uppercase text-primary">
              Change Password
            </h5>
            <ChangePasswordForm />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
