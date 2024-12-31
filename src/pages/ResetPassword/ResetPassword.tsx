import { ResetPasswordForm } from "@modules/ResetPasswordForm";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import resetpasswordimg from "@assets/resetpassword.svg";

export const ResetPassword = () => {
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
          lg={4}
          className="d-flex align-items-center justify-content-center"
        >
          <Card className="p-4 shadow rounded w-100">
            <h3 className="text-center mb-4">Reset Password</h3>
            <ResetPasswordForm />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
