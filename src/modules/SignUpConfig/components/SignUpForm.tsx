import { useState } from "react";
import { Col, Form, FormLabel, Row } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Row className="mb-3">
        <Col>
          <Form.Group>
            <FormLabel>First Name</FormLabel>
            <Form.Control
              className="mt-2"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <FormLabel>Last Name</FormLabel>
            <Form.Control
              className="mt-2"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <FormLabel>Email</FormLabel>
        <Form.Control
          className="mt-2"
          type="email"
          placeholder="Email Address"
        />
      </Form.Group>

      <Form.Group className="position-relative mb-3">
        <FormLabel>Password</FormLabel>
        <Form.Control
          type={showPassword ? "text" : "password"}
          className="mt-2"
          placeholder="Password"
        />
        <button
          type="button"
          className="password-toggle-icon empty-btn"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </Form.Group>

      <Form.Group className="position-relative mb-3">
        <FormLabel>Confirm Password</FormLabel>
        <Form.Control
          type={showConfirmPassword ? "text" : "password"}
          className="mt-2"
          placeholder="Confirm Password"
        />
        <button
          type="button"
          className="password-toggle-icon empty-btn"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          aria-label={
            showConfirmPassword
              ? "Hide confirm password"
              : "Show confirm password"
          }
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </Form.Group>
    </>
  );
};

export default SignUpForm;
