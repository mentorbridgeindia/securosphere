import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FormInput } from "@/ui/atoms/FormInput";

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
            <FormInput
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <FormInput
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <FormInput type="email" placeholder="Email Address" />
      </Form.Group>

      <Form.Group className="position-relative mb-3">
        <FormInput
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <div
          className="password-toggle-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </Form.Group>

      <Form.Group className="position-relative mb-3">
        <FormInput
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
        />
        <div
          className="password-toggle-icon"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </Form.Group>
    </>
  );
};

export default SignUpForm;
