import forgotppasswordimg from "@assets/forgotpassword.svg";
import { ForgotPasswordForm } from "@modules/ForgotPasswordForm";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const ForgotPassword = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Row className="w-100 center">
        <Col
          lg={4}
          className="d-none d-lg-flex justify-content-center align-items-center"
          style={{ paddingRight: "50px" }}
        >
          <img
            src={forgotppasswordimg}
            alt="Forgot Password"
            className="img-fluid"
          />
        </Col>

        <Col
          lg={4}
          xs={12}
          md={10}
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Card
            className="p-4 shadow rounded w-100"
            style={{ maxWidth: "400px" }}
          >
            <div className="d-flex justify-content-center brand-lg">
              <h2>Forgot Password</h2>
            </div>
            <div className="mt-3">
              <ForgotPasswordForm />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
