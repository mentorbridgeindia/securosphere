import { Col, Form, FormLabel, Row } from "react-bootstrap";
import { ReactComponent as IconEye } from "@assets/icons/icon-eye.svg";

const SignUpForm = () => {
  return (
    <>
      <Row className="mb-3">
        <Col>
          <Form.Group>
            <FormLabel>First Name</FormLabel>
            <Form.Control type="text" placeholder="First Name" readOnly />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <FormLabel>Last Name</FormLabel>
            <Form.Control type="text" placeholder="Last Name" readOnly />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <FormLabel>Email</FormLabel>
        <Form.Control
          type="email"
          placeholder="Email Address"
          readOnly
        />
      </Form.Group>

      <Form.Group className="position-relative mb-3">
        <FormLabel>Password</FormLabel>
        <Form.Control placeholder="Password" readOnly />
        <button
          type="button"
          className="password-toggle-icon empty-btn"
          aria-label={"Show password"}
        >
          {<IconEye />}
        </button>
      </Form.Group>

      <Form.Group className="position-relative mb-3">
        <FormLabel>Confirm Password</FormLabel>
        <Form.Control
          placeholder="Confirm Password"
          readOnly
        />
        <button
          type="button"
          className="password-toggle-icon empty-btn"
          aria-label={"Show confirm password"}
        >
          {<IconEye />}
        </button>
      </Form.Group>
    </>
  );
};

export default SignUpForm;
