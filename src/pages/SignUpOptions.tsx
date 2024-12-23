// Import dependencies
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Stack,
} from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignUpOptions.scss";
import { FormLabel } from "@/ui/atoms/FormLabel";
import { FormInput } from "@/ui/atoms/FormInput";
import { Anchor } from "@/ui/atoms/Anchor";

// Define types
interface SignUpOptionsState {
  email: boolean;
  google: boolean;
  facebook: boolean;
  github: boolean;
  gitlab: boolean;
  microsoft: boolean;
  twitter: boolean;
  linkedin: boolean;
}

interface IconMapping {
  [provider: string]: JSX.Element | string;
}

const ICONS: IconMapping = {
  email: "/assets/mail.svg",
  google: "/assets/google.svg",
  facebook: "/assets/facebook.svg",
  github: "/assets/github.svg",
  gitlab: "/assets/gitlab.svg",
  microsoft: "/assets/microsoft.svg",
  twitter: "/assets/twitter.svg",
  linkedin: "/assets/linkedin.svg",
};

// Helper to render icons
const renderIcon = (icon: JSX.Element | string) => {
  return typeof icon === "string" ? (
    <img src={icon} alt="icon" width={20} height={20} />
  ) : (
    icon
  );
};

const SignUpOptions = () => {
  const [appName, setAppName] = useState("");
  const [signupOptions, setSignupOptions] = useState<SignUpOptionsState>({
    email: true,
    google: true,
    facebook: false,
    github: false,
    gitlab: false,
    microsoft: false,
    twitter: false,
    linkedin: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Toggle signup option
  const handleOptionToggle = (option: keyof SignUpOptionsState) => {
    setSignupOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions, [option]: !prevOptions[option] };
      const hasSelectedOption = Object.values(updatedOptions).some(
        (value) => value
      );

      setErrorMessage(
        hasSelectedOption ? "" : "Please select at least one option."
      );

      return updatedOptions;
    });
  };

  const hasSocialOption = Object.entries(signupOptions).some(
    ([provider, isSelected]) =>
      isSelected &&
      [
        "google",
        "facebook",
        "github",
        "gitlab",
        "microsoft",
        "twitter",
        "linkedin",
      ].includes(provider)
  );

  const hasAnyOptionSelected = Object.values(signupOptions).some(
    (isSelected) => isSelected
  );

  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center g-4">
        {/* Application Setup */}
        <Col lg={3} md={5} xs={12}>
          {" "}
          {/* Adjusted column width */}
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="fs-4 mb-2">Configure Sign Up Options</h4>
              <p className="text-muted small mb-4">
                Customize sign up settings. You can modify these later in the
                dashboard.
              </p>

              <Form>
                <Form.Group className="mb-4">
                  <FormLabel>Application Name</FormLabel>
                  <FormInput
                    type="text"
                    placeholder="Enter application name"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                  />
                </Form.Group>

                <div className="signup-options-container">
                  <h6 className="mb-3">Select Sign Up Methods</h6>
                  <Stack>
                    {Object.keys(signupOptions).map((option) => (
                      <div
                        key={option}
                        className="d-flex justify-content-between align-items-center p-2 rounded hover-bg-light mb-2"
                      >
                        <div className="d-flex align-items-center gap-3">
                          {renderIcon(ICONS[option])}
                          <span className="fw-medium">
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </span>
                        </div>
                        <Form.Check
                          type="switch"
                          checked={
                            signupOptions[option as keyof SignUpOptionsState]
                          }
                          onChange={() =>
                            handleOptionToggle(
                              option as keyof SignUpOptionsState
                            )
                          }
                          className="custom-switch"
                        />
                      </div>
                    ))}
                  </Stack>
                </div>

                {errorMessage && (
                  <p className="text-danger small mt-3">{errorMessage}</p>
                )}

                <Button
                  className="w-100 mt-4 custom-button"
                  disabled={!hasAnyOptionSelected}
                >
                  Save Settings
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* User Signup Preview */}
        <Col lg={3} md={5} xs={12}>
          {" "}
          {/* Adjusted column width */}
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <h4 className="fs-4 mb-3">
                Sign up to {appName || "Your Application"}
              </h4>

              {hasSocialOption && (
                <div className="my-3">
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {Object.entries(signupOptions)
                      .filter(
                        ([provider, isSelected]) =>
                          isSelected &&
                          [
                            "google",
                            "facebook",
                            "github",
                            "gitlab",
                            "microsoft",
                            "twitter",
                            "linkedin",
                          ].includes(provider)
                      )
                      .map(([provider]) => (
                        <Button
                          key={provider}
                          variant="outline-secondary"
                          className="social-btn d-flex align-items-center justify-content-center"
                        >
                          {renderIcon(ICONS[provider])}
                        </Button>
                      ))}
                  </div>
                </div>
              )}
              <div className="text-muted mb-3">or</div>

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

              {signupOptions.email && (
                <Form.Group className="mb-3">
                  <FormInput type="email" placeholder="Email Address" />
                </Form.Group>
              )}

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

              <Button className="custom-button px-4 mt-3">Sign Up</Button>

              <div className="mt-3">
                <span>
                  Already have an account? <Anchor href="login">Log In</Anchor>
                </span>
                <br />
                <Anchor href="forgot-password">Forgot Password?</Anchor>
              </div>
            </Card.Body>
          </Card>
          <div className="text-muted text-center small mt-2">
            This is a preview
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpOptions;
